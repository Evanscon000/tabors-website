package com.example.taborwebsite.storefront.controller;

import com.example.taborwebsite.storefront.entities.NailsForSaleEntity;
import com.example.taborwebsite.storefront.repo.SellingRepo;
import com.example.taborwebsite.storefront.service.SellingService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class SellingServiceTest {

    @Mock
    SellingRepo sellingRepo;

    @InjectMocks
    SellingService sellingService;

    @Test
    void getAllNailsReturnsMappedDtos() {
        var entities = List.of(
                new NailsForSaleEntity(1L, "Coffin", "Halloween", "Red", "L", 3500, 5),
                new NailsForSaleEntity(2L, "Almond", "Christmas", "Blue", "M", 4000, 6)
        );
        when(sellingRepo.findAll()).thenReturn(entities);

        var result = sellingService.getAllNails();

        assertThat(result.get(0).style()).isEqualTo("Coffin");
        assertThat(result.get(1).color()).isEqualTo("Blue");
    }
}
