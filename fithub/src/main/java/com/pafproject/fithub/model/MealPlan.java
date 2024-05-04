package com.pafproject.fithub.model;

import com.pafproject.fithub.util.MealTime;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MealPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mealNames;
    @Enumerated(EnumType.STRING)
    private MealTime mealTime;
    private Date date;
    @ManyToOne(cascade = CascadeType.DETACH)
    private User user;

}
