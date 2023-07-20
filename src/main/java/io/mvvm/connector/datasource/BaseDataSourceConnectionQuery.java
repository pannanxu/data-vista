package io.mvvm.connector.datasource;

import io.mvvm.connector.ConnectionQuery;
import lombok.Data;

/**
 * BaseDataSourceConnectionQuery.
 *
 * @author: pan
 **/
@Data
public class BaseDataSourceConnectionQuery implements ConnectionQuery {

    private String sql;

}
