package dev.productmanager.start.entities.concretes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "productmanager")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private int price;
    @Column(name = "discountpercentage")
    private float discountPercentage;
    @Column(name = "rating")
    private float rating;
    @Column(name = "stock")
    private int stock;
    @Column(name = "brand")
    private String brand;
    @Column(name = "category")
    private String category;
    @Column(name = "thumbnail")
    private String thumbnail;
    @Column(name = "images")
    private String images;
}
