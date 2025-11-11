package com.example.taborwebsite.storefront.service;

import com.example.taborwebsite.storefront.dto.SellingDto;
import com.example.taborwebsite.storefront.entities.NailsForSaleEntity;
import com.example.taborwebsite.storefront.repo.SellingRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SellingService {
    private final SellingRepo sellingRepo;

    public List<SellingDto> getAllNails() {
        return sellingRepo.findAll().stream()
                .map(SellingService::toDto)
                .toList();
    }

    private static SellingDto toDto(NailsForSaleEntity e) {
        return new SellingDto(
                e.getId(),
                e.getStyle(),
                e.getTheme(),
                e.getColor(),
                e.getSize(),
                e.getPriceCents(),
                e.getQty()
        );
    }
}
