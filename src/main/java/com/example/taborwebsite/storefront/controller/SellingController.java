package com.example.taborwebsite.storefront.controller;

import com.example.taborwebsite.storefront.dto.SellingDto;
import com.example.taborwebsite.storefront.service.SellingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tabor")
@RequiredArgsConstructor
public class SellingController {
    private final SellingService sellingService;

    @GetMapping("/selling")
    public  List<SellingDto> getAllNails() {
        return sellingService.getAllNails();
    }
}
