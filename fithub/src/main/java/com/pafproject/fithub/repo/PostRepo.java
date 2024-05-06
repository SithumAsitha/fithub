package com.pafproject.fithub.repo;
import com.pafproject.fithub.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PostRepo extends JpaRepository<Post, Integer> {

}
