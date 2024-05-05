package com.pafproject.fithub.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.pafproject.fithub.model.Post;
import com.pafproject.fithub.request_response.BasicResponse;
import com.pafproject.fithub.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class PostController {
    public PostService postService;
    ObjectMapper objectMapper;

    public  PostController(PostService postService,ObjectMapper mapper){
        this.postService = postService;
        this.objectMapper = mapper;
    }
    @PostMapping("/addPost")
    public ResponseEntity<BasicResponse> addBlong(
            @RequestParam("post_image") MultipartFile postImage,
            @RequestParam("post_data") String postData
            ){
            BasicResponse basicResponse = new BasicResponse();
            try {
                Post post = null;
                post = objectMapper.readValue(postData,Post.class);
                basicResponse = postService.addPost(post,postImage);
            } catch(Exception e){
                e.printStackTrace();

        }
            return new ResponseEntity<>(basicResponse, HttpStatus.OK);
    }
    @GetMapping("/allPosts")
    public ResponseEntity<BasicResponse> getAllBlogs(){
        BasicResponse basicResponse = new BasicResponse();
        try {
            basicResponse = postService.getAllPosts();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(basicResponse,HttpStatus.OK);
    }
    @GetMapping("/allPosts/{id}")
    public ResponseEntity<BasicResponse> getPostById(@PathVariable int id){
        BasicResponse basicResponse = new BasicResponse();
        try {
            basicResponse = postService.getPostById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(basicResponse,HttpStatus.OK);
    }



}
