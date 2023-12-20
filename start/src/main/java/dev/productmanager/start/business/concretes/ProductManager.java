package dev.productmanager.start.business.concretes;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.productmanager.start.business.abstracts.ProductService;
import dev.productmanager.start.dataAccess.abstracts.ProductRepository;
import dev.productmanager.start.entities.concretes.Product;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductManager implements ProductService{

    private ProductRepository productRepository;
    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }
    @Override
    public Product getProductById(int id) {
        return productRepository.findById(id).orElseThrow();
    }
    
    
}
