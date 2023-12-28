package dev.productmanager.start.business.concretes;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import dev.productmanager.start.business.abstracts.ProductService;
import dev.productmanager.start.business.requests.CreateProductRequest;
import dev.productmanager.start.business.requests.UpdateProductRequest;
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
        List<Product> products = productRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
        List<GetAllProductsResponse> productsResponse = products.stream()
        .map(product -> this.modelMapperService.forResponse()
        .map(product, GetAllProductsResponse.class)).collect(Collectors.toList());
    return productsResponse;
    }
    @Override
    public GetByIdResponse getProductById(int id) {
        Product product = productRepository.findById(id).orElseThrow();
        GetByIdResponse response = this.modelMapperService.forResponse().map(product, GetByIdResponse.class);
        return response;
    }
    @Override
    public Product update(UpdateProductRequest updateProductRequest, int id) {
        Product product = productRepository.findById(id).orElseThrow();
        product.setBrand(updateProductRequest.getBrand());
        product.setPrice(updateProductRequest.getPrice());
        product.setTitle(updateProductRequest.getTitle());
        productRepository.save(product);
        return product;
    }
    @Override
    public List<Product> getAllProductsSortedById() {
        return productRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }
    @Override
    public Product add(CreateProductRequest createProductRequest) {
        Product product = this.modelMapperService.forRequest().map(createProductRequest, Product.class);
        this.productRepository.save(product);
        return product;
    }
    @Override
    public void delete(int id) {
        this.productRepository.deleteById(id);
    }
	@Override
    public List<Product> getProductsByDescription(String description) {
        return productRepository.findByDescriptionLike(description);
	}
    
    


    
    
    
}
