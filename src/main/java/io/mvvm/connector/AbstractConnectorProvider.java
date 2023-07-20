package io.mvvm.connector;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.common.util.concurrent.Futures;
import com.google.common.util.concurrent.ListenableFuture;
import io.mvvm.common.JsonUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

/**
 * AbstractConnectorProvider.
 *
 * @author: pan
 **/
@Slf4j
public abstract class AbstractConnectorProvider<T extends Connector, C extends ConnectorPolicy<T, Q>, Q extends ConnectionQuery>
        implements ConnectorProvider<T, Q> {

    private final Map<ConnectorId, C> CONNECTOR_CONTAINER;
    private final ReentrantLock lock = new ReentrantLock();
    private final ThreadPoolTaskExecutor executor;

    protected AbstractConnectorProvider() {
        CONNECTOR_CONTAINER = new ConcurrentHashMap<>(4);
        this.executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10); // 设置核心线程数
        executor.setMaxPoolSize(20); // 设置最大线程数
        executor.setQueueCapacity(200); // 设置队列大小
        executor.setThreadNamePrefix(getConnectorClass().getName() + "-"); // 设置线程名前缀 
        executor.initialize();
    }

    @Override
    public T convert(ConnectorConfigMap configMap) {
        T config = JsonUtils.nodeToObject(configMap.getConfig(), getConnectorClass());
        config.setId(configMap.getId());
        return config;
    }

    protected abstract Class<T> getConnectorClass();

    @Override
    public ConnectorPolicy<T, Q> getConnector(T config) {
        C connector = CONNECTOR_CONTAINER.get(config.getId());
        if (null == connector) {
            connector = createConnector(config);
        }
        return connector;
    }

    private C createConnector(T config) {
        try {
            if (lock.tryLock(10000, TimeUnit.MILLISECONDS) && !CONNECTOR_CONTAINER.containsKey(config.getId())) {
                log.debug("Connector try to create [ {} ]", config.getId());
                ListenableFuture<C> future = Futures.submit(() -> {
                    C connector = doCreateConnector(config);
                    connector.connect();
                    return connector;
                }, executor);
                C connector = future.get(3000, TimeUnit.MILLISECONDS);
                if (null != connector) {
                    CONNECTOR_CONTAINER.put(config.getId(), connector);
                    return connector;
                }
            }
            log.info("Connector Create Failed: {}", config.getId());
            throw new RuntimeException("Create Connector Failed " + config.getId());
        } catch (Exception ex) {
            log.error("Create Connector Failed: {}", config.getId(), ex);
            throw new RuntimeException("Create Connector Failed", ex);
        } finally {
            if (lock.isHeldByCurrentThread() && lock.isLocked()) {
                lock.unlock();
            }
        }
    }

    protected abstract C doCreateConnector(T config);

    @Override
    public JsonNode query(T config, Q query) {
        try {
            ConnectorPolicy<T, Q> connector = getConnector(config);
            if (null != connector) {
                log.debug("Connector try to query [ {}, {} ]", config.getId(), getName());
                ListenableFuture<JsonNode> future = Futures.submit(() -> connector.query(query), executor);
                return future.get(30000, TimeUnit.MILLISECONDS);
            }
        } catch (Exception ex) {
            log.error("Query Connector Failed: {}", config.getId(), ex);
        }
        return JsonUtils.createObjectNode();
    }

    @Override
    public boolean isConnected(ConnectorId id) {
        C connector = CONNECTOR_CONTAINER.get(id);
        return null != connector && connector.isConnected();
    }

    @Override
    public boolean disconnect(ConnectorId id) {
        C connector = CONNECTOR_CONTAINER.get(id);
        if (null == connector) {
            log.info("Connector not found: {}", id);
            return false;
        }
        CONNECTOR_CONTAINER.remove(id);
        Futures.submit(() -> {
            try {
                if (connector.isConnected()) {
                    connector.disconnect();
                    log.info("Disconnect Connector Success: {}", id);
                }
            } catch (Exception ex) {
                log.error("Disconnect Connector Failed", ex);
            }
            return false;
        }, executor);
        return true;
    }
}
