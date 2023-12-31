package dev.productmanager.start.business.abstracts;

import java.util.List;

import dev.productmanager.start.business.requests.CreateProductRequest;
import dev.productmanager.start.business.requests.UpdateProductRequest;
import dev.productmanager.start.business.responses.GetAllProductsResponse;
import dev.productmanager.start.business.responses.GetByIdResponse;
import dev.productmanager.start.entities.concretes.Product;

public interface ProductService {
    List<GetAllProductsResponse> getAll();

    GetByIdResponse getProductById(int id);

    Product update(UpdateProductRequest updateProductRequest, int id);

    List<Product> getAllProductsSortedById();

    Product add(CreateProductRequest createProductRequest);

    void delete(int id);

    List<Product> getProductsByDescription(String description);

    List<Product> findProductsWithPagination(int offset, int pageSize);
}
