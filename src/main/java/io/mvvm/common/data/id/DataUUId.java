package io.mvvm.common.data.id;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Data;

import java.util.UUID;

/**
 * DataUUId.
 *
 * @author: pan
 **/
@Data
public abstract class DataUUId implements DataId<UUID> {

    private UUID id;

    public DataUUId() {
    }

    @JsonCreator
    public DataUUId(UUID id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "kind: %s, id: %s".formatted(getKind(), getId());
    }
}
