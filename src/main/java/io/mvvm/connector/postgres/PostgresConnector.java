package io.mvvm.connector.postgres;

import io.mvvm.connector.datasource.BaseDataSourceConnector;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * PostgresConnector.
 *
 * @author: pan
 **/
@Data
@EqualsAndHashCode(callSuper = true)
public class PostgresConnector extends BaseDataSourceConnector {
    public static final String DRIVER_NAME = "org.postgresql.Driver";

    @Override
    protected String getDriverClassName() {
        return DRIVER_NAME;
    }
}
