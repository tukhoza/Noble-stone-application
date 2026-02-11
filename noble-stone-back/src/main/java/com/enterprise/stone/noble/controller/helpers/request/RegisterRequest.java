package com.enterprise.stone.noble.controller.helpers.request;

import com.enterprise.stone.noble.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String password;
    private String phone;
    private Role role;

}
