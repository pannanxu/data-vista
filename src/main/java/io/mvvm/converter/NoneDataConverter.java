package io.mvvm.converter;

/**
 * NoneDataConverter.
 *
 * @author: pan
 **/
public class NoneDataConverter implements DataConverter {
    @Override
    public String getName() {
        return "None";
    }

    @Override
    public String getDisplayName() {
        return "无需转换";
    }
}
