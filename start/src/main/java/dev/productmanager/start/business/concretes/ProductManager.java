package dev.productmanager.start.business.concretes;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import dev.productmanager.start.business.abstracts.ProductService;
import dev.productmanager.start.business.responses.GetAllProductsResponse;
import dev.productmanager.start.business.responses.GetByIdResponse;
import dev.productmanager.start.core.utils.mappers.ModelMapperService;
import dev.productmanager.start.dataAccess.abstracts.ProductRepository;
import dev.productmanager.start.entities.concretes.Product;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductManager implements ProductService{

    private ProductRepository productRepository;
    private ModelMapperService modelMapperService;
    @Override
    public List<GetAllProductsResponse> getAll() {
        List<Product> products = productRepository.findAll();
        List<GetAllProductsResponse> productsResponse = products.stream()
        .map(product -> this.modelMapperService.forResponse()
        .map(product, GetAllProductsResponse.class)).collect(Collectors.toList());
//iş kuralları koşulları
return productsResponse;
    }
    @Override
    public GetByIdResponse getProductById(int id) {
        Product product = productRepository.findById(id).orElseThrow();
        GetByIdResponse response = this.modelMapperService.forResponse().map(product, GetByIdResponse.class);
        return response;
    }
    
    
}
