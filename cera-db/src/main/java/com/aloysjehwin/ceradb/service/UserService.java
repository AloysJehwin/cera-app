package com.aloysjehwin.ceradb.service;

import com.aloysjehwin.ceradb.model.User;
import com.aloysjehwin.ceradb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User register(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public Optional<User> login(String email, String rawPassword) {
        Optional<User> user = repo.findByEmail(email);
        if (user.isPresent() && encoder.matches(rawPassword, user.get().getPassword())) {
            return user;
        }
        return Optional.empty();
    }

}
