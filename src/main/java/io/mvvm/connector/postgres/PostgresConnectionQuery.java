package io.mvvm.connector.postgres;

import com.fasterxml.jackson.annotation.JsonCreator;
import io.mvvm.connector.datasource.BaseDataSourceConnectionQuery;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * PostgresConnectionQuery.
 *
 * @author: pan
 **/
@Data
@EqualsAndHashCode(callSuper = true)
public class PostgresConnectionQuery extends BaseDataSourceConnectionQuery {

    @JsonCreator
    public PostgresConnectionQuery(String sql) {
        setSql(sql);
    }
}
