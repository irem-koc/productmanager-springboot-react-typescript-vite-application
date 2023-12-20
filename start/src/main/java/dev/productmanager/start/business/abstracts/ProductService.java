package dev.productmanager.start.business.abstracts;

import java.util.List;

import dev.productmanager.start.entities.concretes.Product;

public interface ProductService {
    List<Product> getAll();

    Product getProductById(int id);
}
