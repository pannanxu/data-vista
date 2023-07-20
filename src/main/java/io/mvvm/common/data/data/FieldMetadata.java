package io.mvvm.common.data.data;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

/**
 * FieldDataMeta.
 *
 * @author: pan
 **/
@Data
@Accessors(chain = true)
public class FieldMetadata implements DataMeta {
    
    private String name;
    private String type;
    private String key;
    private List<FieldMetadata> fields;

    public FieldMetadata() {
    }

    public FieldMetadata(String name, String type) {
        this.name = name;
        this.type = type;
        this.key = name;
    }
}
