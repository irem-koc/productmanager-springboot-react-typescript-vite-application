package dev.productmanager.start.business.abstracts;

import java.util.List;

import dev.productmanager.start.business.responses.GetAllProductsResponse;
import dev.productmanager.start.business.responses.GetByIdResponse;

public interface ProductService {
    List<GetAllProductsResponse> getAll();
    GetByIdResponse getProductById(int id);
}
