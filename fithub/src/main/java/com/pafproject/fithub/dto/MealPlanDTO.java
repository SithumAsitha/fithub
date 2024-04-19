package com.pafproject.fithub.dto;

import com.pafproject.fithub.util.MealTime;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MealPlanDTO {
    private int id;
    private LocalDate date;
    private List<String> mealName;
    private MealTime mealTime;
}
