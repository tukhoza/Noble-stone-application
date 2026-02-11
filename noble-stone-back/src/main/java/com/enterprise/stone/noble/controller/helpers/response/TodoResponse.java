package com.enterprise.stone.noble.controller.helpers.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class TodoResponse {
    private Long Id;
    private String todoTitle;
    private String todoDescription;
    private boolean done;
}
