package com.pafproject.fithub.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pafproject.fithub.model.WorkoutStatus;
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

    @PostMapping("/workoutstatus")
    public ResponseEntity<WorkoutStatus> createExercise(@RequestBody WorkoutStatus workoutStatus){
        WorkoutStatus savedWorkoutStatus = workoutStatusRepo.save(workoutStatus);
        return new ResponseEntity<>(savedWorkoutStatus,HttpStatus.CREATED);
    }

    @PutMapping("/workoutstatus/update/{id}")
    public ResponseEntity<WorkoutStatus> updateExercise(@PathVariable Long id, @RequestBody WorkoutStatus updatedWorkoutStatus) {
        Optional<WorkoutStatus> existingWorkoutStatusOptional = workoutStatusRepo.findById(id);

        if (existingWorkoutStatusOptional.isPresent()) {
            WorkoutStatus existingWorkoutStatus = existingWorkoutStatusOptional.get();
            
            // Update the fields of the existing workout status with the values from the updated workout status
            existingWorkoutStatus.setTimestamp(updatedWorkoutStatus.getTimestamp());
            existingWorkoutStatus.setDescription(updatedWorkoutStatus.getDescription());
            existingWorkoutStatus.setDistanceRan(updatedWorkoutStatus.getDistanceRan());
            existingWorkoutStatus.setPushupsCompleted(updatedWorkoutStatus.getPushupsCompleted());
            existingWorkoutStatus.setWeightLifted(updatedWorkoutStatus.getWeightLifted());
            existingWorkoutStatus.setDurationMinutes(updatedWorkoutStatus.getDurationMinutes());
            existingWorkoutStatus.setCaloriesBurned(updatedWorkoutStatus.getCaloriesBurned());

            // Save the updated workout status
            WorkoutStatus savedWorkoutStatus = workoutStatusRepo.save(existingWorkoutStatus);
            return new ResponseEntity<>(savedWorkoutStatus, HttpStatus.OK);
        } else {
            // If the workout status with the given id does not exist, return a 404 Not Found response
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("workoutstatus/delete/{id}")
    public boolean delete(@PathVariable String id){
        Long statusId = Long.valueOf(id);
        workoutStatusRepo.deleteById(statusId);
        return true;
    }
}

