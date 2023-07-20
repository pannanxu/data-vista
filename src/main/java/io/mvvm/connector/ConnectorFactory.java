package io.mvvm.connector;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * ConnectorFactory.
 *
 * @author: pan
 **/
@Slf4j
@Component
public class ConnectorFactory {

    private final Map<String, ConnectorProvider<Connector, ConnectionQuery>> providers;

    public ConnectorFactory(ObjectProvider<ConnectorProvider<? extends Connector, ? extends ConnectionQuery>> providers) {
        this.providers = new ConcurrentHashMap<>();
        providers.forEach(e -> {
            if (this.providers.containsKey(e.getName())) {
                log.warn("DataSourceProvider name conflict: {}", e.getName());
                throw new RuntimeException("DataSourceProvider name conflict: " + e.getName());
            }
            this.providers.put(e.getName(), cast(e));
            log.info("Registered connector: {}", e.getName());
        });
    }

    public ConnectorPolicy<Connector, ConnectionQuery> getConnector(ConnectorConfigMap configMap) {
        var provider = getConnectorProvider(configMap.getId().getName());
        Connector source = provider.convert(configMap);
        var strategy = provider.getConnector(source);
        if (null == strategy) {
            log.warn("DataSourceStrategy not found: {}", configMap.getId());
            throw new RuntimeException("DataSourceStrategy not found: " + configMap.getId());
        }
        return strategy;
    }

    public ConnectorProvider<Connector, ConnectionQuery> getConnectorProvider(String name) {
        var provider = providers.get(name);
        if (null == provider) {
            log.warn("DataSourceProvider not found: {}", name);
            throw new RuntimeException("DataSourceProvider not found: " + name);
        }
        return provider;
    }

    @SuppressWarnings("unchecked")
    private ConnectorProvider<Connector, ConnectionQuery> cast(ConnectorProvider<? extends Connector, ? extends ConnectionQuery> cast) {
        return (ConnectorProvider<Connector, ConnectionQuery>) cast;
    }

}
