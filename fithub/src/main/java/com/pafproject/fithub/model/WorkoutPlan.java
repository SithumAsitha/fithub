package com.pafproject.fithub.model;

import java.util.List;

import jakarta.persistence.*;

@Entity
public class workoutplan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "workout_id")
    private List<Exercise> exercises;

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }
    
}
