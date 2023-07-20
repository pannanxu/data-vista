package io.mvvm.connector;

import com.fasterxml.jackson.databind.JsonNode;

/**
 * ConnectorPolicy.
 *
 * @author: pan
 **/
public interface ConnectorPolicy<T extends Connector, Q extends ConnectionQuery> {

    String getName();

    void connect();

    boolean isConnected();

    JsonNode query(Q query);

    boolean disconnect();

}
