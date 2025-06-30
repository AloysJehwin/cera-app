package com.aloysjehwin.ceradb.controller;

import com.aloysjehwin.ceradb.dto.LoginRequest;
import com.aloysjehwin.ceradb.model.User;
import com.aloysjehwin.ceradb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:19006") // allow your frontend
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public Object login(@RequestBody LoginRequest request) {
        Optional<User> user = service.login(request.getEmail(), request.getPassword());

        return user.orElseGet(() -> (User) Map.of("error", "Invalid credentials"));
    }
}
