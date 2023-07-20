package io.mvvm.connector;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StopWatch;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.locks.ReentrantLock;

/**
 * AbstractConnectorPolicy.
 *
 * @author: pan
 **/
@Slf4j
public abstract class AbstractConnectorPolicy<T extends Connector, Q extends ConnectionQuery>
        implements ConnectorPolicy<T, Q> {

    protected final String name;
    private final T connectorConfig;
    private final AtomicBoolean connected = new AtomicBoolean(false);
    private final ReentrantLock lock = new ReentrantLock();

    public AbstractConnectorPolicy(T config, String name) {
        this.connectorConfig = config;
        this.name = name;
    }

    public T getConfig() {
        return this.connectorConfig;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void connect() {
        if (isConnected()) {
            log.info("Connector already connected");
            return;
        }
        T config = getConfig();
        try {
            if (lock.tryLock(5000, TimeUnit.MILLISECONDS) && !isConnected()) {
                log.debug("Connector try to connect [ {}, {} ]", config.getId(), getName());
                boolean doneConnect = doConnect(config);
                if (!doneConnect) {
                    log.info("Connector connect failed [ {}, {} ]", config.getId(), getName());
                }
                connected.set(doneConnect);
                return;
            }
            throw new RuntimeException("Connector connect timeout.");
        } catch (Exception ex) {
            log.error("Connector connect error", ex);
            connected.set(false);
            throw new RuntimeException("Connector connect error.", ex);
        } finally {
            if (lock.isHeldByCurrentThread() && lock.isLocked()) {
                lock.unlock();
            }
        }
    }

    protected abstract boolean doConnect(T config) throws Exception;

    @Override
    public boolean isConnected() {
        return connected.get();
    }

    @Override
    public boolean disconnect() {
        if (!isConnected()) {
            log.info("Connector already disconnected.");
            return true;
        }
        try {
            if (lock.tryLock(5000, TimeUnit.MILLISECONDS) && isConnected()) {
                log.debug("Connector try to disconnect [ {}, {} ]", getConfig().getId(), getName());
                boolean doneDisconnect = doDisconnect();
                if (!doneDisconnect) {
                    log.info("Connector disconnect failed [ {}, {} ]", getConfig().getId(), getName());
                    return false;
                }
                connected.set(false);
                return true;
            }
        } catch (Exception ex) {
            log.error("Connector disconnect error  [ {}, {} ]", getConfig().getId(), getName(), ex);
            throw new RuntimeException("Connector disconnect error.", ex);
        } finally {
            if (lock.isHeldByCurrentThread() && lock.isLocked()) {
                lock.unlock();
            }
        }
        return false;
    }

    protected abstract boolean doDisconnect();

    @Override
    public JsonNode query(Q query) {
        if (!isConnected()) {
            connect();
        }
        String stopWatchName = getName() + " Strategy Get Data";
        StopWatch watch = new StopWatch(stopWatchName);
        watch.start();
        JsonNode data = null;
        try {
            data = doQuery(query);
        } catch (Exception e) {
            log.error("Connector query error [ {}, {} ]", getConfig().getId(), getName(), e);
            throw new RuntimeException(e);
        } finally {
            watch.stop();
        }
        log.debug("Task [{}] was executed for {} milliseconds.", stopWatchName, watch.getLastTaskTimeMillis());
        return data;
    }

    protected abstract JsonNode doQuery(Q query) throws Exception;
}
