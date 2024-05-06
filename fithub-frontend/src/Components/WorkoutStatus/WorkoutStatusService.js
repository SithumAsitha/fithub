import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8081/workoutstatus';

export const listStatus = () => axios.get(REST_API_BASE_URL);

export const createWorkoutStatus = (workoutstatus) => axios.post(REST_API_BASE_URL, workoutstatus);

export const getStatus = (statusId) => axios.get(REST_API_BASE_URL + '/' + statusId);

export const updateStatus = (statusId, workoutstatus) => axios.put(REST_API_BASE_URL + '/' + statusId,workoutstatus);

export const deleteStatus = (statusId) => axios.delete(REST_API_BASE_URL+ '/' + statusId);

