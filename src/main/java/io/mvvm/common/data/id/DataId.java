package io.mvvm.common.data.id;

import java.io.Serializable;

/**
 * DataId.
 *
 * @author: pan
 **/
public interface DataId<T> extends Serializable {
    
    T getId();
    
    String getKind();
}
