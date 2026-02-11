package com.enterprise.stone.noble.controller.helpers.response;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class QuoteResponse {
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
