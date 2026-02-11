package com.enterprise.stone.noble.controller.helpers.request;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class TodoRequest {
    private Long id;
    private String todoTitle;
    private String todoDescription;
    private boolean done;
}
