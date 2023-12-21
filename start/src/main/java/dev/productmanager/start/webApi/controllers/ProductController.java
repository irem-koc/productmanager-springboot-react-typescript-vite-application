package dev.productmanager.start.webApi.controllers;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.productmanager.start.business.abstracts.ProductService;
import dev.productmanager.start.business.responses.GetAllProductsResponse;
import dev.productmanager.start.business.responses.GetByIdResponse;
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
}
