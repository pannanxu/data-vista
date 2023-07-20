package io.mvvm.connector;

import com.fasterxml.jackson.databind.JsonNode;

/**
 * ConnectorProvider.
 *
 * @author: pan
 **/
public interface ConnectorProvider<T extends Connector, Q extends ConnectionQuery> {

    String getName();
    
    T convert(ConnectorConfigMap configMap);

    ConnectorPolicy<T, Q> getConnector(T config);

    JsonNode query(T config, Q query);
    
    boolean isConnected(ConnectorId id);

    boolean disconnect(ConnectorId id);

}
