package com.pafproject.fithub.api;



import com.google.gson.Gson;
import com.pafproject.fithub.dto.MealPlanDTO;
import com.pafproject.fithub.model.MealPlan;
import com.pafproject.fithub.model.User;
import com.pafproject.fithub.repo.MealPlanRepository;
import com.pafproject.fithub.util.MealTime;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/meal")
public class MealPlanAPI {

    private final MealPlanRepository repo;
    public MealPlanAPI(MealPlanRepository repo){
        this.repo = repo;
    }

    @PostMapping(value = "/save",consumes = MediaType.APPLICATION_JSON_VALUE)
    public String saveMeal(@RequestBody MealPlanDTO obj){
        System.out.println(obj);

        MealPlan mealPlan = new MealPlan();
        mealPlan.setMealNames(new Gson().toJson(obj.getMealName()));
        mealPlan.setMealTime(obj.getMealTime());
        mealPlan.setDate(obj.getDate());

        User user = new User();
        user.setId(obj.getUserId());

        mealPlan.setUser(user);
        try {
            repo.save(mealPlan);
        }catch (Exception e){
            e.printStackTrace();
            return "not saved";
        }

        System.out.println("RUN");
        return "OK";
    }

    @DeleteMapping(value = "/delete")
    public String deleteMeal(@RequestParam(required = false) Integer id){
        System.out.println(id);
        System.out.println("RUN");
        return "OK";
    }

    @PutMapping(value = "/update",consumes = MediaType.APPLICATION_JSON_VALUE)
    public String updateMeal(@RequestBody MealPlanDTO dto){
        System.out.println(dto);
        System.out.println("RUN");
        return "OK";
    }

    @GetMapping(value = "/get")
    public List<MealPlanDTO> getAll(MealPlanDTO dto){

        List<String> mealNames1 = Arrays.asList("Oatmeal", "Fruit Salad");
        List<String> mealNames2 = Arrays.asList("Grilled Chicken", "Quinoa Salad");
        List<String> mealNames3 = Arrays.asList("Spaghetti Bolognese", "Caesar Salad");

        MealPlanDTO meal1 = new MealPlanDTO();
        //meal1.setDate(LocalDate.of(2024, 4, 17));
        meal1.setMealName(mealNames1);
        meal1.setMealTime(MealTime.BREAKFAST);

        MealPlanDTO meal2 = new MealPlanDTO();
        //meal2.setDate(LocalDate.of(2024, 4, 17));
        meal2.setMealName(mealNames2);
        meal2.setMealTime(MealTime.LUNCH);

        MealPlanDTO meal3 = new MealPlanDTO();
        //meal3.setDate(LocalDate.of(2024, 4, 17));
        meal3.setMealName(mealNames3);
        meal3.setMealTime(MealTime.DINNER);

        // Create ArrayList and add MealPackageDTO objects
        List<MealPlanDTO> mealPlan = new ArrayList<>();
        mealPlan.add(meal1);
        mealPlan.add(meal2);
        mealPlan.add(meal3);
        System.out.println("RUN");
        return mealPlan;
    }

}
