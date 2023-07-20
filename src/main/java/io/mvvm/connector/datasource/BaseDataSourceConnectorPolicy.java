package io.mvvm.connector.datasource;

import com.fasterxml.jackson.databind.JsonNode;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import io.mvvm.common.JsonUtils;
import io.mvvm.connector.AbstractConnectorPolicy;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * BaseDataSourceConnectorPolicy.
 *
 * @author: pan
 **/
@Slf4j
public abstract class BaseDataSourceConnectorPolicy
        <T extends BaseDataSourceConnector, Q extends BaseDataSourceConnectionQuery>
        extends AbstractConnectorPolicy<T, Q> {

    private HikariDataSource datasource;
    private JdbcTemplate template;

    public BaseDataSourceConnectorPolicy(T datasource, String name) {
        super(datasource, name);
    }

    @Override
    public boolean isConnected() {
        return super.isConnected() && null != this.datasource && this.datasource.isRunning();
    }

    @Override
    protected boolean doConnect(T config) throws Exception {
        HikariConfig configuration = config.fromConfig();
        this.datasource = new HikariDataSource(configuration);
        String sql = this.datasource.getConnectionTestQuery();
        if (this.datasource.isRunning()) {
            this.template = new JdbcTemplate(this.datasource);
            this.template.queryForList(sql);
        }
        return this.datasource.isRunning();
    }

    @Override
    protected boolean doDisconnect() {
        if (null != this.datasource && this.datasource.isRunning() && !this.datasource.isClosed()) {
            this.datasource.close();
        }
        this.datasource = null;
        this.template = null;
        return true;
    }

    @Override
    protected JsonNode doQuery(Q query) throws Exception {
        var list = this.template.queryForList(query.getSql());
        return JsonUtils.listToJsonNode(list);
    }

}
