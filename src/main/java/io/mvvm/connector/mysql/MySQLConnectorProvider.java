package io.mvvm.connector.mysql;

import io.mvvm.connector.AbstractConnectorProvider;
import org.springframework.stereotype.Component;

/**
 * MySQLConnectorProvider.
 *
 * @author: pan
 **/
@Component("MySQLConnectorProvider")
public class MySQLConnectorProvider extends AbstractConnectorProvider<MySQLConnector, MySQLConnectorPolicy, MySQLConnectionQuery> {

    @Override
    public String getName() {
        return MySQLConnectorPolicy.name;
    }

    @Override
    protected Class<MySQLConnector> getConnectorClass() {
        return MySQLConnector.class;
    }

    @Override
    protected MySQLConnectorPolicy doCreateConnector(MySQLConnector config) {
        return new MySQLConnectorPolicy(config);
    }
}
