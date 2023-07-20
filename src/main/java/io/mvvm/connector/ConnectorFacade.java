package io.mvvm.connector;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * ConnectorFacade.
 *
 * @author: pan
 **/
@Component
@RequiredArgsConstructor
public class ConnectorFacade {

    private final ConnectorFactory connectorFactory;

    public JsonNode query(ConnectorConfigMap configMap, ConnectionQuery query) {
        var provider = connectorFactory.getConnectorProvider(configMap.getId().getName());
        return provider.query(provider.convert(configMap), query);
    }

    public boolean close(ConnectorId id) {
        var provider = connectorFactory.getConnectorProvider(id.getName());
        return provider.disconnect(id);
    }

}
