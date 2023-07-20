package io.mvvm.common;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.util.List;
import java.util.Map;

/**
 * JsonUtils.
 *
 * @author: pan
 **/
public class JsonUtils {

    private static final ObjectMapper mapper = new ObjectMapper();

    public static <T> T nodeToObject(JsonNode node, Class<T> clazz) {
        try {
            return mapper.convertValue(node, clazz);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static JsonNode listToJsonNode(List<Map<String, Object>> list) {
        try {
            return mapper.convertValue(list, ArrayNode.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static ObjectNode createObjectNode() {
        return mapper.createObjectNode();
    }
}
