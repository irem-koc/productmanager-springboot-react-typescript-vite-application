package dev.productmanager.start.core.utils.mappers;

import org.modelmapper.ModelMapper;

public interface ModelMapperService {
    ModelMapper forRequest();

    ModelMapper forResponse();
}
