package com.pafproject.fithub.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.pafproject.fithub.model.Exercise;
import com.pafproject.fithub.repo.ExerciseRepo;

@RestController
public class ExerciseController {

    @Autowired
    ExerciseRepo workoutplan_repository;

    @GetMapping("/workoutplan")
    public String showMessage(){
        return "Workout Plan Module";
    }

    @GetMapping("/workoutplan/{id}")
    public Optional show(@PathVariable String id){
        String workoutId = String.valueOf(id);
        System.out.println(workoutId);
        return workoutplan_repository.findById(workoutId);
    }

    @PostMapping("/workoutplan")
    public ResponseEntity<Exercise> createExercise(@RequestBody Exercise exercise) {
        Exercise savedExercise = workoutplan_repository.save(exercise);
        return new ResponseEntity<>(savedExercise, HttpStatus.CREATED);
    }
    
}
