package dev.productmanager.start.webApi.controllers;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.productmanager.start.business.abstracts.ProductService;
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
        return productService.getAll();
    }
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }
}