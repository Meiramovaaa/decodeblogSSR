import * as types from "./types"

export function registerUsers(data){
    return {type: types.REGISTER_USERS, data}
}

export function signinUsers(data){
    return{type:types.LOGIN_USERS,data }
}

export function getUser(data){
    return{type:types.GET_USERS, data}
}