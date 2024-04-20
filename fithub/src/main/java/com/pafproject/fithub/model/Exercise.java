package com.pafproject.fithub.model;

import jakarta.persistence.*;

@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String user_id;
    
    // @Column(name = "exerName")
    private String exerName;

    private int nSets;
    private int nReps;

    public Exercise(String exerName, int nSets, int nReps){
        this.setExerName(exerName);
        this.setnSets(nSets);
        this.setnReps(nReps);
    }

    public Exercise() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getExerName() {
        return exerName;
    }

    public void setExerName(String exerName) {
        this.exerName = exerName;
    }

    public int getnSets() {
        return nSets;
    }

    public void setnSets(int nSets) {
        this.nSets = nSets;
    }

    public int getnReps() {
        return nReps;
    }

    public void setnReps(int nReps) {
        this.nReps = nReps;
    }
}