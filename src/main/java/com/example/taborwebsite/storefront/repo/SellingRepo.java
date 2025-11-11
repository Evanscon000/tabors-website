package com.example.taborwebsite.storefront.repo;

import com.example.taborwebsite.storefront.entities.NailsForSaleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellingRepo extends JpaRepository<NailsForSaleEntity, Long> {
}
