package io.mvvm.connector.dao.sql;

import io.mvvm.connector.ConnectorConfigMap;
import io.mvvm.connector.dao.ConnectorDao;
import org.springframework.stereotype.Component;

import java.util.UUID;

/**
 * JpaConnectorDao.
 *
 * @author: pan
 **/
@Component("ConnectorDao")
public class JpaConnectorDao implements ConnectorDao {
    @Override
    public ConnectorConfigMap findById(UUID uuid) {
        return null;
    }

    @Override
    public ConnectorConfigMap save(ConnectorConfigMap data) {
        return null;
    }
}
