import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8081/workoutstatus';

export const listStatus = () => axios.get(REST_API_BASE_URL);

export const createWorkoutStatus = (workoutstatus) => axios.post(REST_API_BASE_URL, workoutstatus);