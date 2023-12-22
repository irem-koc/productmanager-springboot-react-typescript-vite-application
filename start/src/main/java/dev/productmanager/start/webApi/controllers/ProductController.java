package dev.productmanager.start.webApi.controllers;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.productmanager.start.business.abstracts.ProductService;
import dev.productmanager.start.business.requests.UpdateProductRequest;
import dev.productmanager.start.business.responses.GetAllProductsResponse;
import dev.productmanager.start.business.responses.GetByIdResponse;
import dev.productmanager.start.entities.concretes.Product;
import lombok.AllArgsConstructor;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/products")
public class ProductController {
    private ProductService productService;
    //constructor created by lombok


    @GetMapping()
    public List<GetAllProductsResponse> getAll() {
        return productService.getAll();
    }
    @GetMapping("/{id}")
    public GetByIdResponse getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }
    @PutMapping("/{id}")
    public List<Product> update(@RequestBody UpdateProductRequest updateProductRequest,@PathVariable int id) {
        this.productService.update(updateProductRequest, id);
        return productService.getAllProductsSortedById();
    }
}
