package com.pafproject.fithub.model;

import jakarta.persistence.*;

@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "user_id")
    private String user_id;
    
    @Column(name = "exerName")
    private String exerName;

    @Column(name = "nSets")
    private int nSets;

    @Column(name = "nReps")
    private int nReps;

    public Exercise(){

    }

    public String getUser_id(){
        return this.user_id;
    }

    public String getExerName(){
        return this.exerName;
    }

    public int getnSets(){
        return this.nSets;
    }

    public int getnReps(){
        return this.nReps;
    }

    public void setUser_id(String user_id){
        this.user_id=user_id;
    }

    public void exerName(String exerName){
        this.exerName=exerName;
    }

    public void setnSets(int nSets){
        this.nSets=nSets;
    }

    public void setnReps(int nReps){
        this.nReps=nReps;
    }

}
