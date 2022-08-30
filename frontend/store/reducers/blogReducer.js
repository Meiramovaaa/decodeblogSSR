import * as types from '../actions/types';

const initialState = {
    blogs : [],
    allBlogs:[],
    userBlogs:[],
    result:[],
    blogInfo:[]
}

export default function blogReducers(state = initialState , action){
    switch(action.type){
        case types.RECIEVED_GET_ALL_BLOGS:
            return{...state , allBlogs: action.payload}
        case types.FAILURE_GET_ALL_BLOGS:
            alert('Введутся технические работы. Попробуйте позже')
            return {state , errors: action.payload}
        case types.RECIEVED_GET_USERS_BLOGS:
            return{...state, userBlogs:action.payload}
        case types.FAILURE_GET_USERS_BLOGS:
            alert('Введутся технические работы. Попробуйте позже')
            return {state , errors: action.payload}
        case types.RECIEVED_CREATE_BLOG:
            return{...state , blogs: action.payload}
        case types.FAILURE_CREATE_BLOG:
            alert('Введутся технические работы. Попробуйте позже')
            return {state , errors: action.payload}
        case types.RECIEVED_DELETE_BLOG:
            return{...state , result: action.payload}
        case types.FAILURE_DELETE_BLOG:
            alert('Введутся технические работы. Попробуйте позже')
            return {state , errors: action.payload}
        case types.RECIEVED_GET_BLOG_BY_ID:
            return{...state , blogInfo: action.payload}
        case types.FAILURE_GET_BLOG_BY_ID:
            alert('Введутся технические работы. Попробуйте позже')
            return {state , errors: action.payload}
        case types.RECIEVED_UPDATE_BLOG:
            return{...state , blogs: action.payload}
        case types.FAILURE_UPDATE_BLOG:
            alert('Введутся технические работы. Попробуйте позже')
            return {state , errors: action.payload}
        default:
            return state
    }
}