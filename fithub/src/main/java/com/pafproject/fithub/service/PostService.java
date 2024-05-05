package com.pafproject.fithub.service;

import com.pafproject.fithub.model.Post;
import com.pafproject.fithub.request_response.BasicResponse;
import org.springframework.web.multipart.MultipartFile;

public interface PostService {

    BasicResponse addPost(Post post, MultipartFile postImage);

    BasicResponse getAllPosts();

    BasicResponse getPostById(int id);

    BasicResponse updatePost(Post post, MultipartFile postImage);
}