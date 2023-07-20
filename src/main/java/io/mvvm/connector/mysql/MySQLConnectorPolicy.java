package io.mvvm.connector.mysql;

import io.mvvm.connector.datasource.BaseDataSourceConnectorPolicy;
import lombok.extern.slf4j.Slf4j;

/**
 * MySQLConnectorPolicy.
 *
 * @author: pan
 **/
@Slf4j
public class MySQLConnectorPolicy extends BaseDataSourceConnectorPolicy<MySQLConnector, MySQLConnectionQuery> {

    public static final String name = "MySQL";

    public MySQLConnectorPolicy(MySQLConnector datasource) {
        super(datasource, name);
    }

}
