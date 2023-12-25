package dev.productmanager.start.webApi.controllers;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import dev.productmanager.start.business.abstracts.ProductService;
import dev.productmanager.start.business.requests.CreateProductRequest;
import dev.productmanager.start.business.requests.UpdateProductRequest;
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
    public List<Product> getAll() {
        return this.productService.getAllProductsSortedById();
    }
    @GetMapping("/{id}")
    public GetByIdResponse getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@RequestBody UpdateProductRequest updateProductRequest,
            @PathVariable int id) {
        this.productService.update(updateProductRequest, id);
        Product response = this.productService.update(updateProductRequest, id);
        System.out.println("a" + ResponseEntity.ok(response) + "b");
        this.productService.getAllProductsSortedById();
        return ResponseEntity.ok(response);

    }

    @PostMapping()
    @ResponseStatus(code=HttpStatus.CREATED)
    public void add(@RequestBody CreateProductRequest createProductRequest) {
        this.productService.add(createProductRequest);
    }
    
}
