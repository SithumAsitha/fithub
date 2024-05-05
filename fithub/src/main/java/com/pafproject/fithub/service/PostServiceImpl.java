package com.pafproject.fithub.service;

import com.pafproject.fithub.model.Post;
import com.pafproject.fithub.repo.PostRepo;
import com.pafproject.fithub.request_response.BasicResponse;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

    public PostRepo postRepo;
    public PostServiceImpl(PostRepo postRepo){
        this.postRepo = postRepo;
    }

    @Override
    public BasicResponse addPost(Post post, MultipartFile postImage) {
        BasicResponse basicResponse = new BasicResponse();
        try {
            if(post != null && !postImage.isEmpty()){

                // file upload start
                File savFile = new ClassPathResource("static/postImages").getFile();
                Path path = Paths.get(savFile.getAbsolutePath() + File.separator + postImage.getOriginalFilename());
                Files.copy(postImage.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
                // file upload end

                Post post2 = new Post();
                post2.setPostDescription(post.getPostDescription());
                post2.setTimestamp(post.getTimestamp());
                post2.setUserId(post.getUserId());
                post2.setPostImage(postImage.getOriginalFilename());

                Post p = postRepo.save(post2);

                basicResponse.setData(p);
                basicResponse.setMessage("Post added successfully!");
                basicResponse.setStatus(true);

            }else{

                basicResponse.setMessage("Post addition failed!");
                basicResponse.setStatus(false);
            }


        }catch (Exception e){
            basicResponse.setMessage(e.getMessage());
            basicResponse.setStatus(false);
        }
        return  basicResponse;
    }

    @Override
    public BasicResponse getAllPosts() {
        BasicResponse basicResponse = new BasicResponse();
        try {
            List<Post> allPosts = postRepo.findAll();
            if (!allPosts.isEmpty()) {
                basicResponse.setData(allPosts);
                basicResponse.setMessage("All Posts");
                basicResponse.setStatus(true);
            } else {
                basicResponse.setMessage("No Posts");
                basicResponse.setStatus(false);
            }
        } catch (Exception e) {
            basicResponse.setMessage(e.getMessage());
            basicResponse.setStatus(false);
        }
        return basicResponse;
    }
    @Override
    public BasicResponse getPostById(int id) {
        BasicResponse basicResponse = new BasicResponse();
        try {

            Optional<Post> myPost = postRepo.findById(id);
            if (myPost.isPresent()) {
                Post post = myPost.get();
                basicResponse.setData(post);
                basicResponse.setMessage("Post details");
                basicResponse.setStatus(true);
            } else {
                basicResponse.setMessage("No post details");
                basicResponse.setStatus(false);
            }
        } catch (Exception e) {
            basicResponse.setMessage(e.getMessage());
            basicResponse.setStatus(false);
        }
        return basicResponse;
    }
    @Override
    public BasicResponse updatePost(Post post, MultipartFile postImage) {
        BasicResponse basicResponse = new BasicResponse();
        try {
            Optional<Post> checkPost = postRepo.findById(post.getPostId());
            if (checkPost.isPresent()) {
                Post p = checkPost.get();

                // file upload start
                File savFile = new ClassPathResource("static/postImages").getFile();
                Path path = Paths.get(savFile.getAbsolutePath() + File.separator + postImage.getOriginalFilename());
                Files.copy(postImage.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
                // file upload end

                p.setPostDescription(post.getPostDescription());
                p.setTimestamp(post.getTimestamp());
                p.setPostImage(postImage.getOriginalFilename());

                Post post2 = postRepo.save(p);

                basicResponse.setData(post2);
                basicResponse.setMessage("Post updated successfully");
                basicResponse.setStatus(true);

            } else {
                basicResponse.setMessage("Post updation failed!");
                basicResponse.setStatus(false);
            }
        } catch (Exception e) {
            basicResponse.setMessage(e.getMessage());
            basicResponse.setStatus(false);
        }
        return basicResponse;
    }
    @Override
    public BasicResponse deletePostById(int id) {
        BasicResponse basicResponse = new BasicResponse();
        try {
            Optional<Post> checkPost = postRepo.findById(id);
            if (checkPost.isPresent()) {
                Post post = checkPost.get();
                postRepo.delete(post);
                basicResponse.setData(post);
                basicResponse.setMessage("Post deleted successfully");
                basicResponse.setStatus(true);
            } else {
                basicResponse.setMessage("Post deletion failed");
                basicResponse.setStatus(false);
            }
        } catch (Exception e) {
            basicResponse.setMessage(e.getMessage());
            basicResponse.setStatus(false);
        }
        return basicResponse;
    }

}
