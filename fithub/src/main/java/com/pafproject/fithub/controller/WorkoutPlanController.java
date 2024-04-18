package com.pafproject.fithub.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.pafproject.fithub.model.workoutplan;
import com.pafproject.fithub.repo.WorkoutPlanRepo;

@RestController
public class WorkoutPlanController {

    @Autowired
    WorkoutPlanRepo workoutplan_repository;

    @GetMapping("/workoutplan")
    public String showMessage(){
        return "Workout Plan Module";
    }

    @GetMapping("/workoutplan/{id}")
    public Optional show(@PathVariable String id){
        Long workoutId = Long.parseLong(id);
        System.out.println(workoutId);
        return workoutplan_repository.findById(workoutId);
    }

    @PostMapping("/workoutplan")
    public ResponseEntity<workoutplan> createWorkout(@RequestBody workoutplan workout) {
        workoutplan savedWorkout = (workoutplan) workoutplan_repository.save(workout);
        return new ResponseEntity<>(savedWorkout, HttpStatus.CREATED);
    }
    
}
