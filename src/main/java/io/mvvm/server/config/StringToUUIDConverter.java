package io.mvvm.server.config;

import lombok.NonNull;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class StringToUUIDConverter implements Converter<String, UUID> {
    
    @Override
    public UUID convert(@NonNull String source) {
        return UUID.fromString(source);
    }
    
}
