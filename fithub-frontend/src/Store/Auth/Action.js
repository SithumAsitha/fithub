 import axios from "axios"
import { API_BASE_URL } from "../../config/api"
import { GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "./ActionType"
 
 
 export const loginUser=(loginData)=>async(dispatch)=>{
    try {
        const {data}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData)
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        dispatch({type:LOGIN_USER_SUCCESS,payload:data.jwt})
    } catch (error) {
        console.log("error", error)
        dispatch({type:LOGIN_USER_FAILURE, payload:error.message})
    }
 }

 export const registerUser=(registerData)=>async(dispatch)=>{
    try {
        const {data}=await axios.post(`${API_BASE_URL}/auth/signup`,registerData)
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        dispatch({type:REGISTER_USER_SUCCESS,payload:data.jwt})
    } catch (error) {
        console.log("error", error)
        dispatch({type:REGISTER_USER_FAILURE, payload:error.message})
    }
 }

 export const getUserProfile=()=>async(dispatch)=>{
    try {
        const {data}=await axios.post(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${jwt}`
            }
        })
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        dispatch({type:GET_USER_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        console.log("error", error)
        dispatch({type:GET_USER_PROFILE_FAILURE, payload:error.message})
    }
 }