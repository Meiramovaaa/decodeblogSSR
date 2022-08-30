import * as types from '../actions/types';

const initialState = {
    users : [],
    register: [],
    error: []
}

export default function usersReducers(state = initialState , action){
    switch(action.type){
        case types.RECIEVED_REGISTER_USERS:
            return{...state , register: action.payload}
        case types.FAILURE_REGISTER_USERS:
            alert('Введутся технические работы. Попробуйте позже')
            return {state , errors: action.payload}
        case types.RECIEVED_LOGIN_USERS:
            return{...state, users:action.payload}
        case types.FAILURE_LOGIN_USERS:
            alert('Введутся технические работы. Попробуйте позже')
            return {state , errors: action.payload}
            case types.RECIEVED_GET_USERS:
                return{...state , users: action.payload}
        case types.FAILURE_GET_USERS:
                alert('Введутся технические работы. Попробуйте позже')
                return {state , errors: action.payload}
        default:
            return state
    }
}