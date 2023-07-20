package io.mvvm.server.controller;

import com.fasterxml.jackson.databind.JsonNode;
import io.mvvm.connector.ConnectionQuery;
import io.mvvm.connector.ConnectorConfigMap;
import io.mvvm.connector.ConnectorId;
import io.mvvm.connector.postgres.PostgresConnectionQuery;
import io.mvvm.server.executor.DataSourceExecutor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * DataSourceController.
 *
 * @author: pan
 **/
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class DataSourceController {

    private final DataSourceExecutor executor;

    @PostMapping("/getData")
    public JsonNode getData(@RequestBody ConnectorConfigMap configMap) {
        ConnectionQuery query = new PostgresConnectionQuery("select * from extensions");
        return executor.getData(configMap, query);
    }

    @PostMapping("/close")
    public Map<String, Boolean> close(@RequestBody ConnectorId id) {
        return Map.of("success", executor.close(id));
    }
}
