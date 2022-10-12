import { combineReducers } from 'redux';
import authReducer from './authReducer';
import token from './tokenReducer'
import users from './userReducer'

export default combineReducers({
    authReducer,
    token,
    users
})