package com.pafproject.fithub.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pafproject.fithub.model.workoutplan;

public interface WorkoutPlanRepo extends JpaRepository<workoutplan, Long> {

}
