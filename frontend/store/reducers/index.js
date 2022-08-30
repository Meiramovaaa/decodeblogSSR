import {combineReducers} from 'redux';
import usersReducers from './userReducer'
import categReducers from "./categoriesReducer"
import blogReducers from './blogReducer';
export default combineReducers({
    usersReducers,
    categReducers,
    blogReducers
})