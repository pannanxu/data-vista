package io.mvvm.connector.mysql;

import com.fasterxml.jackson.annotation.JsonCreator;
import io.mvvm.connector.datasource.BaseDataSourceConnectionQuery;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * MySQLConnectionQuery.
 *
 * @author: pan
 **/
@Data
@EqualsAndHashCode(callSuper = true)
public class MySQLConnectionQuery extends BaseDataSourceConnectionQuery {

    @JsonCreator
    public MySQLConnectionQuery(String sql) {
        setSql(sql);
    }
}
