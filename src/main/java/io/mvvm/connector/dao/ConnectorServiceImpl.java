package io.mvvm.connector.dao;

import io.mvvm.connector.ConnectorService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * ConnectorServiceImpl.
 *
 * @author: pan
 **/
@RequiredArgsConstructor
@Service("ConnectorService")
public class ConnectorServiceImpl implements ConnectorService {
    
    private final ConnectorDao dao;
}
