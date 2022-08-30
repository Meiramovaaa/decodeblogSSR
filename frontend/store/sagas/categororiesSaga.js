import {all, put, takeLatest} from "redux-saga/effects"
import * as types from "../actions/types"
import axios from 'axios'
import {BASE_URL} from "../../config/baseurl"

function* getCategories(){
    try{
        const categories = yield axios.get(`${BASE_URL}/api/categories`).then(res => res.data)
        yield put({type:types.RECIEVED_GET_CATEGORIES, payload:categories})
        
    }catch(e){
        yield put({type:types.FAILURE_GET_CATEGORIES, errors:e})
    }
}

export function* categorySagas(){
    yield all([
        yield takeLatest(types.GET_CATEGORIES , getCategories),
    ])
}