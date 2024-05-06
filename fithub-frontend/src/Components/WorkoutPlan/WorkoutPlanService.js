import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8081/workoutplan';

export const listPlan = () => axios.get(REST_API_BASE_URL);

export const createWorkoutPlan = (workoutPlan) => axios.post(REST_API_BASE_URL, workoutPlan);

export const getPlan = (PlanId) => axios.get(REST_API_BASE_URL + '/' + PlanId);

export const updatePlan = (PlanId, workoutPlan) => axios.put(REST_API_BASE_URL + '/' + PlanId,workoutPlan);

export const deletePlan = (PlanId) => axios.delete(REST_API_BASE_URL+ '/' + PlanId);