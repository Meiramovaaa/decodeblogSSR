import * as types from '../actions/types';

const initialState = {
    categories : [],
}

export default function categReducers(state = initialState , action){
    switch(action.type){
        case types.RECIEVED_GET_CATEGORIES:
                return{...state , categories: action.payload}
        case types.FAILURE_GET_CATEGORIES:
                alert('Введутся технические работы. Попробуйте позже')
                return {state , errors: action.payload}
        default:
            return state
    }
}