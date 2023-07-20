package io.mvvm.common.data.data;

import com.fasterxml.jackson.databind.JsonNode;

/**
 * ListableData.
 *
 * @author: pan
 **/
@lombok.Data
public class JsonNodeData implements Data<JsonNode> {

    private JsonNode data;
    private FieldMetadata metadata;

    @Override
    public DataMeta getMetaData() {
        return this.metadata;
    }

    public int getCount() {
        return null == this.data ? 0 : this.data.size();
    }

}
