package io.mvvm.common.data.data;

/**
 * Data.
 *
 * @author: pan
 **/
public interface Data<T> {

    DataMeta getMetaData();

    T getData();

}
