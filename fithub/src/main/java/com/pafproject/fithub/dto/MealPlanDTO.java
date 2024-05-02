package com.pafproject.fithub.dto;

import com.pafproject.fithub.util.MealTime;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MealPlanDTO {
    private Long id;
    private String userId;
    private List<String> mealName;
    private Date date;
    private MealTime mealTime;
}
