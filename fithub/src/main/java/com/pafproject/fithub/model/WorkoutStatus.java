package com.pafproject.fithub.model;
import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class WorkoutStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "status_id")
    private Long statusId;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "timestamp")
    private Timestamp timestamp;

    @Column(name = "description")
    private String description;

    @Column(name = "distance_ran")
    private Double distanceRan;

    @Column(name = "pushups_completed")
    private Integer pushupsCompleted;

    @Column(name = "weight_lifted")
    private Double weightLifted;

    @Column(name = "duration_minutes")
    private Integer durationMinutes;

    @Column(name = "calories_burned")
    private Integer caloriesBurned;

    public WorkoutStatus(){
        
    }
    public Long getStatusId() {
        return statusId;
    }
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getDistanceRan() {
        return distanceRan;
    }

    public void setDistanceRan(Double distanceRan) {
        this.distanceRan = distanceRan;
    }

    public Integer getPushupsCompleted() {
        return pushupsCompleted;
    }

    public void setPushupsCompleted(Integer pushupsCompleted) {
        this.pushupsCompleted = pushupsCompleted;
    }

    public Double getWeightLifted() {
        return weightLifted;
    }

    public void setWeightLifted(Double weightLifted) {
        this.weightLifted = weightLifted;
    }

    public Integer getDurationMinutes() {
        return durationMinutes;
    }

    public void setDurationMinutes(Integer durationMinutes) {
        this.durationMinutes = durationMinutes;
    }

    public Integer getCaloriesBurned() {
        return caloriesBurned;
    }

    public void setCaloriesBurned(Integer caloriesBurned) {
        this.caloriesBurned = caloriesBurned;
    }
}
