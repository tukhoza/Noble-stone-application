package com.enterprise.stone.noble.controller.helpers.request;

import java.io.File;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PhotoRequest {
    private Long Id;
    private String name;
    private String category;
    private File file;
}
