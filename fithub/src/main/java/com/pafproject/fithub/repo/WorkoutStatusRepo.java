package com.pafproject.fithub.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pafproject.fithub.model.WorkoutStatus;

public interface WorkoutStatusRepo extends JpaRepository<WorkoutStatus,Long>{

}
