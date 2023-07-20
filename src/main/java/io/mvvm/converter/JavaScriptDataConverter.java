package io.mvvm.converter;

/**
 * JsonPathDataConverter.
 *
 * @author: pan
 **/
public class JavaScriptDataConverter implements DataConverter {

    @Override
    public String getName() {
        return "JS";
    }

    @Override
    public String getDisplayName() {
        return "JavaScript";
    }
}
