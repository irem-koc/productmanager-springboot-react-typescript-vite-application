package dev.productmanager.start.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GetAllProductsResponse {
    private int id;
    private String title;
    private String description;
    private int price;
    private float discountPercentage;
    private float rating;
    private int stock;
    private String brand;
    private String category;
    private String thumbnail;
    private String images;
}
