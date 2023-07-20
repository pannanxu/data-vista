package io.mvvm.connector.excel;

import io.mvvm.connector.AbstractConnectorProvider;
import org.springframework.stereotype.Component;

/**
 * ExcelConnectorProvider.
 *
 * @author: pan
 **/
@Component("ExcelConnectorProvider")
public class ExcelConnectorProvider extends AbstractConnectorProvider<ExcelConnector, ExcelConnectorPolicy, ExcelConnectionQuery> {

    private final ExcelConnectorPolicy policy;

    public ExcelConnectorProvider() {
        this.policy = new ExcelConnectorPolicy(new ExcelConnector());
    }

    @Override
    public String getName() {
        return ExcelConnectorPolicy.name;
    }

    @Override
    protected Class<ExcelConnector> getConnectorClass() {
        return ExcelConnector.class;
    }

    @Override
    protected ExcelConnectorPolicy doCreateConnector(ExcelConnector config) {
        return this.policy;
    }
}
