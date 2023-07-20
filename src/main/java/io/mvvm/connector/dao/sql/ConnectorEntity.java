package io.mvvm.connector.dao.sql;

import com.fasterxml.jackson.databind.JsonNode;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import io.mvvm.connector.ConnectorId;
import io.mvvm.connector.ConnectorConfigMap;
import io.mvvm.common.dao.model.AbstractEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Type;

/**
 * ConnectorEntity.
 *
 * @author: pan
 **/
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "t_connector")
public class ConnectorEntity extends AbstractEntity<ConnectorConfigMap> {

    @Column(name = "name", length = 24, nullable = false)
    private String name;

    @Column(name = "display_name", length = 64, nullable = false)
    private String displayName;

    @Type(JsonType.class)
    @Column(name = "config", nullable = false)
    private JsonNode config;

    @Override
    public ConnectorConfigMap toData() {
        return ConnectorConfigMap.of(new ConnectorId(getId(), getName()), getConfig());
    }
}
