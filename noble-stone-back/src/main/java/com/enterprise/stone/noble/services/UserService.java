package com.enterprise.stone.noble.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.enterprise.stone.noble.controller.helpers.request.AuthenticationRequest;
import com.enterprise.stone.noble.controller.helpers.request.RegisterRequest;
import com.enterprise.stone.noble.controller.helpers.response.AuthenticationResponse;
import com.enterprise.stone.noble.controller.helpers.response.UserResponse;
import com.enterprise.stone.noble.entities.Role;
import com.enterprise.stone.noble.entities.User;
import com.enterprise.stone.noble.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest register) {
        User user = User.builder()
                .name(register.getName())
                .surname(register.getSurname())
                .email(register.getEmail())
                .phone(register.getPhone())
                .password(passwordEncoder.encode(register.getPassword()))
                .role(register.getRole())
                .build();
        userRepo.save(user);
        String jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticate) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticate.getEmail(), authenticate.getPassword()));

        User user = userRepo.findByEmail(authenticate.getEmail()).orElseThrow();
        String jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public List<UserResponse> getUsers() {
        List<User> users = userRepo.findAll();
        List<UserResponse> userResponselist = new ArrayList<>();
        for (User user : users) {
            UserResponse userResponse = UserResponse.builder()
                    .id(user.getId())
                    .name(user.getName())
                    .email(user.getEmail())
                    .surname(user.getSurname())
                    .phone(user.getPhone())
                    .role(user.getRole())
                    .build();
            userResponselist.add(userResponse);
        }
        return userResponselist;
    }

    public void removeUser(RegisterRequest authenticate) {
        userRepo.deleteById(authenticate.getId());
    }
}
