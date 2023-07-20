package io.mvvm.connector.excel;

import io.mvvm.connector.Connector;
import io.mvvm.connector.ConnectorId;
import lombok.Data;

import java.io.InputStream;

/**
 * HTTPConnector.
 *
 * @author: pan
 **/
@Data
public class ExcelConnector implements Connector {

    private ConnectorId id;

}
