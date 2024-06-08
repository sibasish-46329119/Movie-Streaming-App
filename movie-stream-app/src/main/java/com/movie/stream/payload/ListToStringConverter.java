package com.movie.stream.payload;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Converter
public class ListToStringConverter implements AttributeConverter<List<String>, String> {

    @Override
    public String convertToDatabaseColumn(List<String> attribute) {
        // Convert the list to a comma-separated string for storage
        return attribute != null ? String.join(",", attribute) : null;
    }

    @Override
    public List<String> convertToEntityAttribute(String dbData) {
        // Convert the comma-separated string back to a list
        return dbData != null ? Arrays.stream(dbData.split(",")).collect(Collectors.toList()) : null;
    }
}
