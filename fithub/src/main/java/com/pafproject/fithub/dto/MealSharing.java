package com.pafproject.fithub.dto;

import com.pafproject.fithub.util.MealTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MealSharing {
    private long mealPlanId;
    private String userName;
    private List<String> mealName;
    private MealTime time;
}
