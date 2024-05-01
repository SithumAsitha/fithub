import { GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, RESGISTER_USER_REQUEST } from "./ActionType";

const initialState={
    user:null,
    loading:false,
    error:null,
    jwt:null
}

export const authReducer=(state:initialState, action)=>{
    switch (action) {
        case LOGIN_USER_REQUEST:
        case RESGISTER_USER_REQUEST:
        case GET_USER_PROFILE_REQUEST:
            return {...state, loading:true, error:null}
            break;

        case LOGIN_USER_SUCCESS:
        case REGISTER_USER_SUCCESS:
            return {...state, loading:false , error:null, jwt:action.payload}

        case GET_USER_PROFILE_SUCCESS:
            return {...state, loading:false,error:null, user:action.payload}

        case LOGIN_USER_FAILURE:
        case REGISTER_USER_FAILURE:
        case GET_USER_PROFILE_FAILURE:
            return {...state, loading:false, errorq:action.payload}

        default:
            return  state;
    }
}