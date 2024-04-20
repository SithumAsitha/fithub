package com.pafproject.fithub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

    

}

