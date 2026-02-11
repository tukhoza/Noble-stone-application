package com.enterprise.stone.noble.controller.helpers.request;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MultipartFilePhoto {

    MultipartFile file;
    String category;
}
