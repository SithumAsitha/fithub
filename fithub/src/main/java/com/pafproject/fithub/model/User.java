package com.pafproject.fithub.model;


import jakarta.persistence.*;


@Entity
public class User {
    @Id

    private String id;

    private String username;
    private String email;
    private String provider; 

    public User(){

    }

    public void setId(String id){
        this.id=id;
    }

    public void setUsername(String username){
        this.username=username;
    }

    public void setEmail(String email){
        this.email=email;
    }

    public void setProvider(String provider){
        this.provider=provider;
    }

    public String getId(){
        return this.id;
    }

    public String username(){
        return this.username;
    }

    public String email(){
        return this.email;
    }

    public String provider(){
        return this.provider;
    }

}
