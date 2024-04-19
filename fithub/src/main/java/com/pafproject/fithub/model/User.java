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


    public User(String username, String email, String provider){
        this.username=username;
        this.email=email;
        this.provider=provider;
    }


}
