package com.pafproject.fithub.api;



import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.pafproject.fithub.dto.MealPlanDTO;
import com.pafproject.fithub.dto.MealSharing;
import com.pafproject.fithub.model.MealPlan;
import com.pafproject.fithub.model.User;
import com.pafproject.fithub.repo.MealPlanRepository;
import com.pafproject.fithub.util.MealTime;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
        try {
            repo.deleteById(id.longValue());
            return "OK";
        }catch (Exception e){
            e.printStackTrace();
        }

        return "fail";

    }

    @PutMapping(value = "/update",consumes = MediaType.APPLICATION_JSON_VALUE)
    public String updateMeal(@RequestBody MealPlanDTO dto){
        try {
            repo.updateMealNamesById(dto.getId(),new Gson().toJson(dto.getMealName()));
            return "OK";
        }catch (Exception e){
            e.printStackTrace();
        }
        return "Something Went Wrong";
    }

    @GetMapping(value = "/get")
    public List<MealSharing> getAll(MealPlanDTO dto){
        List<MealPlan> all = repo.findAll();
        List<MealSharing> collect = all.stream().map(ob -> {
            MealSharing mealSharing = new MealSharing();
            mealSharing.setMealPlanId(ob.getId());
            mealSharing.setUserName(ob.getUser().getUsername());
            ArrayList<String> o = new Gson().fromJson(ob.getMealNames(), new TypeToken<ArrayList<String>>() {
            }.getType());
            mealSharing.setMealName(o);
            mealSharing.setTime(ob.getMealTime());
            return mealSharing;
        }).collect(Collectors.toList());
        return collect;
    }

}
