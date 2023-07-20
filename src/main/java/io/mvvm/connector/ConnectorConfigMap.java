package io.mvvm.connector;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.Data;

/**
 * JsonNodeConnector.
 *
 * @author: pan
 **/
@Data
public class ConnectorConfigMap implements Connector {

    private ConnectorId id;

    private JsonNode config;

    @JsonCreator
    public ConnectorConfigMap(ConnectorId id, JsonNode config) {
        this.id = id;
        this.config = config;
    }
    
    public static ConnectorConfigMap of(ConnectorId id, JsonNode config) {
        return new ConnectorConfigMap(id, config);
    }
}
