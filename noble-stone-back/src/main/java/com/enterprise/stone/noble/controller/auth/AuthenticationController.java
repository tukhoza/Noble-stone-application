package com.enterprise.stone.noble.controller.auth;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enterprise.stone.noble.controller.helpers.request.AuthenticationRequest;
import com.enterprise.stone.noble.controller.helpers.request.RegisterRequest;
import com.enterprise.stone.noble.controller.helpers.response.AuthenticationResponse;
import com.enterprise.stone.noble.controller.helpers.response.UserResponse;
import com.enterprise.stone.noble.services.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(userService.register(registerRequest));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest authenticationRequest) {
        return ResponseEntity.ok(userService.authenticate(authenticationRequest));
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserResponse>> getUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }

    @PostMapping("/removeuser")
    public ResponseEntity<String> removeUser(
            @RequestBody RegisterRequest userRemove) {
        userService.removeUser(userRemove);
        return ResponseEntity.ok("Removed");
    }

}
