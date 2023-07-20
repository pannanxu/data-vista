package io.mvvm.connector.datasource;

import com.zaxxer.hikari.HikariConfig;
import io.mvvm.connector.Connector;
import io.mvvm.connector.ConnectorId;
import lombok.Data;

/**
 * BaseDataSourceConnector.
 *
 * @author: pan
 **/
@Data
public abstract class BaseDataSourceConnector implements Connector {

    private ConnectorId id;

    private String ip;
    private Integer port;
    private String database;
    // url 与 ip、port、database 二选一
    private String url;
    private String username;
    private String password;
    private String testSql;
    private ConnectionPool connectionPool;

    @Data
    public static class ConnectionPool {

        private Integer connectionTimeout;
        private Integer minimumIdle;
        private Integer maximumPoolSize;
        private Integer idleTimeout;
        private Integer maxLifetime;

    }

    public String formatUrl() {
        if (null == this.getUrl()) {
            return "jdbc:mysql://%s:%s/%s".formatted(ip, port, database);
        }
        return getUrl();
    }
    
    protected abstract String getDriverClassName();

    public HikariConfig fromConfig() {
        HikariConfig configuration = new HikariConfig();
        configuration.setJdbcUrl(this.formatUrl());
        configuration.setUsername(this.getUsername());
        configuration.setPassword(this.getPassword());
        configuration.setConnectionTestQuery(this.getTestSql());
        configuration.setDriverClassName(getDriverClassName());
        if (null != this.getConnectionPool()) {
            configuration.setConnectionTimeout(this.getConnectionPool().getConnectionTimeout());
            configuration.setMinimumIdle(this.getConnectionPool().getMinimumIdle());
            configuration.setMaximumPoolSize(this.getConnectionPool().getMaximumPoolSize());
            configuration.setIdleTimeout(this.getConnectionPool().getIdleTimeout());
            configuration.setMaxLifetime(this.getConnectionPool().getMaxLifetime());
        }
        return configuration;
    }
}
