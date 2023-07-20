package io.mvvm.connector.dao.sql;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * JpaConnectorRepository.
 *
 * @author: pan
 **/
@Repository("JpaConnectorRepository")
public interface JpaConnectorRepository extends JpaRepository<ConnectorEntity, UUID> {
}
