package com.pafproject.fithub.service;

import com.pafproject.fithub.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}