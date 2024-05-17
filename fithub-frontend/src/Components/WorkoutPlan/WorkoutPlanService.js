import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8081/workoutplan';

export const listPlan = () => axios.get(REST_API_BASE_URL);

export const getPlan = (id) => axios.get(REST_API_BASE_URL + '/' + id);

export const createWorkoutPlan = (workoutplan) => axios.post(REST_API_BASE_URL, workoutplan);

export const deletePlan = (planId) => axios.delete(REST_API_BASE_URL+ '/' + planId);

export const updatePlan = (id, workoutplan) => axios.put(REST_API_BASE_URL + '/' + id,workoutplan);

