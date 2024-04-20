package com.pafproject.fithub.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.pafproject.fithub.repo.WorkoutStatusRepo;


@RestController
public class WorkoutStatusController {

    @Autowired
    WorkoutStatusRepo workoutStatusRepo;

    @GetMapping("/workoutstatus")
    public String showMessage(){
        return "Workout Status Module";
    }

    @GetMapping("/workoutstatus/{id}")
    public Optional show(@PathVariable String id){
        Long statusId = Long.valueOf(id);
        System.out.println(statusId);
        return workoutStatusRepo.findById(statusId);
    }


}

