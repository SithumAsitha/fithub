package com.pafproject.fithub.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pafproject.fithub.model.Exercise; // Example entity type

public interface ExerciseRepo extends JpaRepository<Exercise, Long> {
    
}
