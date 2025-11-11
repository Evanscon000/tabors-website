package com.example.taborwebsite.storefront.dto;

import lombok.Builder;

@Builder(toBuilder = true)
public record SellingDto (
    Long id,
    String style,
    String theme,
    String color,
    String size,
    int priceCents,
    int qty
    ){}
