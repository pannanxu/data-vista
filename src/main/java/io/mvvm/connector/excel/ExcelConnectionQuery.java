package io.mvvm.connector.excel;

import io.mvvm.connector.ConnectionQuery;
import lombok.Data;

import java.io.InputStream;

/**
 * MySQLConnectionQuery.
 *
 * @author: pan
 **/
@Data
public class ExcelConnectionQuery implements ConnectionQuery {

    private InputStream excelFile;
}
