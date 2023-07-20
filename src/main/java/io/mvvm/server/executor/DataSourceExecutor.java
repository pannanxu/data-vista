package io.mvvm.server.executor;

import com.fasterxml.jackson.databind.JsonNode;
import io.mvvm.connector.ConnectionQuery;
import io.mvvm.connector.ConnectorConfigMap;
import io.mvvm.connector.ConnectorFacade;
import io.mvvm.connector.ConnectorId;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * DataSourceExecutor.
 *
 * @author: pan
 **/
@Component
@RequiredArgsConstructor
@Slf4j
public class DataSourceExecutor {

    private final ConnectorFacade facade;

    public JsonNode getData(ConnectorConfigMap connectorConfigMap, ConnectionQuery query) {
        return facade.query(connectorConfigMap, query);
    }

    public boolean close(ConnectorId id) {
        return facade.close(id);
    }
}
