package com.pafproject.fithub.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.pafproject.fithub.model.Post;
import com.pafproject.fithub.request_response.BasicResponse;
import com.pafproject.fithub.service.PostService;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
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

    @PostMapping("/updatePost")
    public ResponseEntity<BasicResponse> updatePost(
            @RequestParam("post_image") MultipartFile postImage,
            @RequestParam("post_data") String blogData
    ){
        BasicResponse basicResponse = new BasicResponse();
        try {
            Post post= null;
            post = objectMapper.readValue(blogData, Post.class);
            basicResponse = postService.updatePost(post,postImage);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(basicResponse,HttpStatus.OK);
    }

    @GetMapping("/deletePostById/{id}")
    public ResponseEntity<BasicResponse> deletePostById(@PathVariable int id){
        BasicResponse basicResponse = new BasicResponse();
        try {
            basicResponse = postService.deletePostById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(basicResponse,HttpStatus.OK);
    }
    @GetMapping("/static/postImages/{imageName}")
    public ResponseEntity<Resource> serveFile(@PathVariable String imageName) {
        Resource file = new FileSystemResource("D:/PAF PROJECT/paf-assignment-2024-ds_22_team/fithub/target/classes/static/postImages/" + imageName);
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG) // Set the Content-Type header
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }





}
