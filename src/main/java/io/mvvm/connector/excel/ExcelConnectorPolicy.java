package io.mvvm.connector.excel;

import com.fasterxml.jackson.databind.JsonNode;
import io.mvvm.connector.AbstractConnectorPolicy;
import lombok.extern.slf4j.Slf4j;

/**
 * HTTPConnectorPolicy.
 *
 * @author: pan
 **/
@Slf4j
public class ExcelConnectorPolicy extends AbstractConnectorPolicy<ExcelConnector, ExcelConnectionQuery> {

    public static final String name = "Excel";

    public ExcelConnectorPolicy(ExcelConnector config) {
        super(config, name);
    }

    @Override
    protected JsonNode doQuery(ExcelConnectionQuery query) {
        return null;
    }

    @Override
    protected boolean doConnect(ExcelConnector config) throws Exception {
        return true;
    }

    @Override
    protected boolean doDisconnect() {
        return true;
    }
}
