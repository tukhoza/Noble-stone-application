package com.enterprise.stone.noble.controller.helpers.response;

import java.io.File;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PhotoResponse {
    private Long Id;
    private String name;
    private String category;
    private String type;
    private byte[] imageData;
}