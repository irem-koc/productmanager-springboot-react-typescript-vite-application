package dev.productmanager.start.business.abstracts;

import java.util.List;

import dev.productmanager.start.business.requests.UpdateProductRequest;
import dev.productmanager.start.business.responses.GetAllProductsResponse;
import dev.productmanager.start.business.responses.GetByIdResponse;
import dev.productmanager.start.entities.concretes.Product;

public interface ProductService {
    List<GetAllProductsResponse> getAll();

    GetByIdResponse getProductById(int id);

    void update(UpdateProductRequest updateProductRequest, int id);

    List<Product> getAllProductsSortedById();
}
