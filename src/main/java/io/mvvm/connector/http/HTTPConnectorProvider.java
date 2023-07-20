package io.mvvm.connector.http;

import io.mvvm.connector.AbstractConnectorProvider;
import org.springframework.stereotype.Component;

/**
 * HTTPConnectorProvider.
 *
 * @author: pan
 **/
@Component("HTTPConnectorProvider")
public class HTTPConnectorProvider extends AbstractConnectorProvider<HTTPConnector, HTTPConnectorPolicy, HTTPConnectionQuery> {

    @Override
    public String getName() {
        return HTTPConnectorPolicy.name;
    }

    @Override
    protected Class<HTTPConnector> getConnectorClass() {
        return HTTPConnector.class;
    }

    @Override
    protected HTTPConnectorPolicy doCreateConnector(HTTPConnector config) {
        return new HTTPConnectorPolicy(config);
    }
}
