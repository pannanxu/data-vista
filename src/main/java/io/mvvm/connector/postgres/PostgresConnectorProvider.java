package io.mvvm.connector.postgres;

import io.mvvm.connector.AbstractConnectorProvider;
import org.springframework.stereotype.Component;

/**
 * PostgresConnectorProvider.
 *
 * @author: pan
 **/
@Component("PostgresConnectorProvider")
public class PostgresConnectorProvider extends AbstractConnectorProvider<PostgresConnector, PostgresConnectorPolicy, PostgresConnectionQuery> {

    @Override
    public String getName() {
        return PostgresConnectorPolicy.name;
    }

    @Override
    protected Class<PostgresConnector> getConnectorClass() {
        return PostgresConnector.class;
    }

    @Override
    protected PostgresConnectorPolicy doCreateConnector(PostgresConnector config) {
        return new PostgresConnectorPolicy(config);
    }
}
