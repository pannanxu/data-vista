package io.mvvm.connector.mysql;

import io.mvvm.connector.datasource.BaseDataSourceConnector;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * MySQLConnector.
 *
 * @author: pan
 **/
@Data
@EqualsAndHashCode(callSuper = true)
public class MySQLConnector extends BaseDataSourceConnector {
    
    public static final String DRIVER_NAME = "com.mysql.cj.jdbc.Driver";

    @Override
    protected String getDriverClassName() {
        return DRIVER_NAME;
    }
}
