package io.mvvm.connector;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.mvvm.common.data.id.DataUUId;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.UUID;

/**
 * ConnectorId.
 *
 * @author: pan
 **/
@Data
@EqualsAndHashCode(callSuper = true)
public class ConnectorId extends DataUUId {

    private String name;

    @JsonCreator
    public ConnectorId(@JsonProperty("id") UUID id, @JsonProperty("name") String name) {
        super(id);
        this.name = name;
    }

    @Override
    public String getKind() {
        return "Connector";
    }

    @Override
    public String toString() {
        return "kind: %s, id: %s, name: %s".formatted(getKind(), getId(), getName());
    }
}
