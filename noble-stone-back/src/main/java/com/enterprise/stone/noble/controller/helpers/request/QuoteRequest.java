package com.enterprise.stone.noble.controller.helpers.request;

import java.util.Date;
import java.util.List;

import com.enterprise.stone.noble.controller.helpers.response.ItemResponse;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class QuoteRequest {
    private Long Id;
    private boolean action;
    private Date date;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private String message;
    private List<ItemResponse> items;
}
