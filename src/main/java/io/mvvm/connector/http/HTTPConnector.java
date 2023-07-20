package io.mvvm.connector.http;

import io.mvvm.connector.Connector;
import io.mvvm.connector.ConnectorId;
import lombok.Data;

import java.net.URI;
import java.util.Map;

/**
 * HTTPConnector.
 *
 * @author: pan
 **/
@Data
public class HTTPConnector implements Connector {

    private ConnectorId id;

    private URI uri;

    private Method method;

    private Map<String,Object> headers;

    private Map<String,String> cookies;

    public enum Method {
        GET,
        POST,
        PUT,
        DELETE
    }
}
