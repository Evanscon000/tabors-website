package com.example.taborwebsite.storefront.controller;

import com.example.taborwebsite.storefront.dto.SellingDto;
import com.example.taborwebsite.storefront.service.SellingService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
class SellingControllerTest {

    @Mock  SellingService sellingService;
    @InjectMocks  SellingController sellingController;

    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(sellingController).build();
    }

    @Test
    void getAllNailsForTabor_returnsJsonArray() throws Exception {
        List<SellingDto> sample = List.of(
                new SellingDto(1L, "Coffin", "Halloween", "Red",  "L", 3500, 5),
                new SellingDto(2L, "Almond", "Christmas", "Blue", "M", 3500, 5)
        );

        when(sellingService.getAllNails()).thenReturn(sample);

        mockMvc.perform(get("/api/tabor/selling"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0].style").value("Coffin"))
                .andExpect(jsonPath("$[1].color").value("Blue"));

        verify(sellingService).getAllNails();
    }
}
