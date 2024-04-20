package com.pafproject.fithub.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pafproject.fithub.model.User;
import com.pafproject.fithub.repo.UserRepo;



public class UserController {

    @Autowired
    UserRepo user_repo;

    @GetMapping("/user")
    public String showMessage(){
        return "User Module";
    }

    @GetMapping("/user/{id}")
    public Optional show(@PathVariable String id){
        String userId = String.valueOf(id);
        System.out.println(userId);
        return user_repo.findById(userId);
    }

    @PostMapping("/user")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = user_repo.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
    

}
