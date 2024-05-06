package com.pafproject.fithub.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    public Optional show(@PathVariable Long id){
        Long workoutId = Long.valueOf(id);
        System.out.println(workoutId);
        return workoutplan_repository.findById(workoutId);
    }

    @PostMapping("/workoutplan")
    public ResponseEntity<Exercise> createExercise(@RequestBody Exercise exercise) {
        Exercise savedExercise = workoutplan_repository.save(exercise);
        System.out.println("saved_exercise"+savedExercise.getUser_id()+savedExercise.getExerName());
        return new ResponseEntity<>(savedExercise, HttpStatus.CREATED);
    }

    @PutMapping("/workoutplan/{id}")
    public ResponseEntity<Exercise> updateExercise(@PathVariable Long id, @RequestBody Exercise updatedExercise) {
        Optional<Exercise> exerciseOptional = workoutplan_repository.findById(id);
        
        if (exerciseOptional.isPresent()) {
            Exercise exercise = exerciseOptional.get();
            exercise.setExerName(updatedExercise.getExerName());
            exercise.setnSets(updatedExercise.getnSets());
            exercise.setnReps(updatedExercise.getnReps());
            
            
            Exercise savedExercise = workoutplan_repository.save(exercise);
            return ResponseEntity.ok(savedExercise);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/workoutplan/{id}")
    public ResponseEntity<Exercise> partiallyUpdateExercise(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        Optional<Exercise> exerciseOptional = workoutplan_repository.findById(id);

        if (exerciseOptional.isPresent()) {
            Exercise exercise = exerciseOptional.get();
            
            updates.forEach((key, value) -> {
                switch (key) {
                    case "exerName":
                        exercise.setExerName((String) value);
                        break;
                    case "nReps":
                        exercise.setnReps((Integer) value);
                        break;
                    case "nSets":
                        exercise.setnSets((Integer) value);
                        break;
                }
            });

            Exercise savedExercise = workoutplan_repository.save(exercise);
            return ResponseEntity.ok(savedExercise);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/workoutplan/{id}")
    public ResponseEntity<Void> deleteExercise(@PathVariable Long id) {
        Optional<Exercise> exerciseOptional = workoutplan_repository.findById(id);
        
        if (exerciseOptional.isPresent()) {
            workoutplan_repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
    

