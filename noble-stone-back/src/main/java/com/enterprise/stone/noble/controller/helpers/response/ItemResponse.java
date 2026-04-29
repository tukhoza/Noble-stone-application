package com.enterprise.stone.noble.controller.helpers.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ItemResponse {
    private Long Id;
    private String itemName;
    private String itemCategory;
    private String itemSubCategory;
    private Double itemPrice;
    private String itemDescription;
    private List<String> itemList;
}
