package com.pafproject.fithub.model;

import jakarta.persistence.*;

@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String exerName;
    private int nSets;
    private int nReps;

    public Exercise(String exerName, int nSets, int nReps){
        this.exerName=exerName;
        this.nSets=nSets;
        this.nReps=nReps;
    }
}
