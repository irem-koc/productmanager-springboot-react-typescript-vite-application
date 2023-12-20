package dev.productmanager.start.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.productmanager.start.entities.concretes.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    
}
