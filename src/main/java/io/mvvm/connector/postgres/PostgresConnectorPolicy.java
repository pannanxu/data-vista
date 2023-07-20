package io.mvvm.connector.postgres;

import io.mvvm.connector.datasource.BaseDataSourceConnectorPolicy;
import lombok.extern.slf4j.Slf4j;

/**
 * PostgresConnectorPolicy.
 *
 * @author: pan
 **/
@Slf4j
public class PostgresConnectorPolicy extends BaseDataSourceConnectorPolicy<PostgresConnector, PostgresConnectionQuery> {

    public static final String name = "Postgres";

    public PostgresConnectorPolicy(PostgresConnector datasource) {
        super(datasource, name);
    }

}
