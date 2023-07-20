package io.mvvm.connector.http;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.mvvm.connector.AbstractConnectorPolicy;
import lombok.extern.slf4j.Slf4j;
import org.apache.hc.client5.http.classic.methods.HttpUriRequestBase;
import org.apache.hc.client5.http.impl.classic.HttpClients;

import java.io.IOException;

/**
 * HTTPConnectorPolicy.
 *
 * @author: pan
 **/
@Slf4j
public class HTTPConnectorPolicy extends AbstractConnectorPolicy<HTTPConnector, HTTPConnectionQuery> {

    public static final String name = "HTTP";
    private final ObjectMapper mapper = new ObjectMapper();

    public HTTPConnectorPolicy(HTTPConnector config) {
        super(config, name);
    }

    @Override
    protected JsonNode doQuery(HTTPConnectionQuery query) {
        HTTPConnector source = getConfig();
        try (var httpClient = HttpClients.createDefault()) {
            var http = new HttpUriRequestBase(source.getMethod().name(), source.getUri());
            if (null != source.getHeaders()) {
                source.getHeaders().forEach(http::addHeader);
            }
            var response = httpClient.execute(http);
            return mapper.readTree(response.getEntity().getContent());
        } catch (IOException e) {
            log.error("HTTP Request Error", e);
            throw new RuntimeException(e);
        }
    }

    @Override
    protected boolean doConnect(HTTPConnector config) throws Exception {
        return true;
    }

    @Override
    protected boolean doDisconnect() {
        return true;
    }
}
