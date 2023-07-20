package io.mvvm.common.dao.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.UUID;

/**
 * BaseEntity.
 *
 * @author: pan
 **/
public interface BaseEntity<T> extends ToData<T>, Serializable {

    UUID getId();

    void setId(UUID id);

    Timestamp getCreatedTime();

    void setCreatedTime(Timestamp createdTime);

}
