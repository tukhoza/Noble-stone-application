package com.enterprise.stone.noble.controller.helpers.response;

import com.enterprise.stone.noble.entities.Role;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserResponse {
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private Role role;
}
