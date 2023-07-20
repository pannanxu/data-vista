package io.mvvm.common.dao.model;

import io.mvvm.common.dao.model.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.sql.Timestamp;
import java.util.UUID;

/**
 * AbstractEntity.
 *
 * @author: pan
 **/
@Data
public abstract class AbstractEntity<T> implements BaseEntity<T> {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID id;

    @CreatedDate
    @Column(name = "created_time", nullable = false)
    private Timestamp createdTime;

}
