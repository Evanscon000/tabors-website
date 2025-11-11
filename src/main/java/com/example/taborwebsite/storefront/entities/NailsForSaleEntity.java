package com.example.taborwebsite.storefront.entities;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Table(name = "nails_for_sale")
public class NailsForSaleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String style;
    private String theme;
    private String color;
    private String size;
    private int priceCents;
    private int qty;
}