package com.pafproject.fithub.model;

import jakarta.persistence.*;


@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String username;
    private String email;
    private String provider; 

    @OneToOne(cascade = CascadeType.ALL)
    private WorkoutPlan workout; 
    //   one user can only have one workout at a moment

    public User(String username, String email, String provider, WorkoutPlan workout){
        this.username=username;
        this.email=email;
        this.provider=provider;
        this.workout=workout;
    }

    public WorkoutPlan getWorkoutPlan(){
        return this.workout;
    }

    public void setWorkoutPlan(WorkoutPlan workout){
        this.workout=workout;
    }

}
