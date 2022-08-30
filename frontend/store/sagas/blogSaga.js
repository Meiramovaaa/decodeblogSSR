import {all, put, takeLatest} from "redux-saga/effects"
import * as types from "../actions/types"
import axios from 'axios'
import {BASE_URL} from "../../config/baseurl"

function* getBlogs(){
    try{
        const blogs = yield axios.get(`${BASE_URL}/api/blogs`).then(res => res.data)
        yield put({type:types.RECIEVED_GET_ALL_BLOGS, payload:blogs})

        
    }catch(e){
        yield put({type:types.FAILURE_GET_ALL_BLOGS, errors:e})
    }
}

function* getUserBlogs({data}){
    try{
        const userBlogs = yield axios.get(`${BASE_URL}/api/blogs/${data}`).then(res => res.data)
        yield put({type:types.RECIEVED_GET_USERS_BLOGS, payload:userBlogs})

        
    }catch(e){
        yield put({type:types.FAILURE_GET_USERS_BLOGS, errors:e})
    }
}

function* createBlog({data}){
    try{
        const blog = yield axios.post(`${BASE_URL}/api/blogs`, data, {
            headers:{'content-type': 'multipart/form-data'}
        }).then(res => res.data)
        yield put({type:types.RECIEVED_CREATE_BLOG, payload:blog})

        
    }catch(e){
        yield put({type:types.FAILURE_CREATE_BLOG, errors:e})
    }
}

function* deleteBlog({data}){
    try{
        const blog = yield axios.delete(`${BASE_URL}/api/blogs/${data}`, data,).then(res => res.data)
        yield put({type:types.RECIEVED_DELETE_BLOG, payload:blog})
    }catch(e){
        yield put({type:types.FAILURE_DELETE_BLOG, errors:e})
    }
}

function* getBlogById({data}){
    try{
        const blog = yield axios.get(`${BASE_URL}/api/getblog/${data}`, data,).then(res => res.data)
        yield put({type:types.RECIEVED_GET_BLOG_BY_ID, payload:blog})
    }catch(e){
        yield put({type:types.FAILURE_GET_BLOG_BY_ID, errors:e})
    }
}

function* updateBlog({data}){
    try{
        const blog = yield axios.put(`${BASE_URL}/api/blogs`, data,{
            headers:{'content-type': 'multipart/form-data'}
        }).then(res => res.data)
        yield put({type:types.RECIEVED_UPDATE_BLOG, payload:blog})
    }catch(e){
        yield put({type:types.FAILURE_UPDATE_BLOG, errors:e})
    }
}

export function* blogSagas(){
    yield all([
        yield takeLatest(types.GET_ALL_BLOGS , getBlogs),
        yield takeLatest(types.GET_USERS_BLOGS , getUserBlogs),
        yield takeLatest(types.CREATE_BLOG , createBlog),
        yield takeLatest(types.DELETE_BLOG , deleteBlog),
        yield takeLatest(types.GET_BLOG_BY_ID , getBlogById),
        yield takeLatest(types.UPDATE_BLOG, updateBlog)
    ])
}