package io.mvvm.common.dao;

/**
 * Dao.
 *
 * @author: pan
 **/
public interface Dao<T, ID> {

    T findById(ID id);
    
    T save(T data);

}
