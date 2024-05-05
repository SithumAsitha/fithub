package com.pafproject.fithub.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="posts")
@Entity
public class Post {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "post_id")
    private int postId;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "post_description")
    private String postDescription;

    @Column(name = "post_image")
    private String postImage;

    @Column(name = "timestamp")
    private Timestamp timestamp;


}
