import {combineReducers} from "@reduxjs/toolkit";
import auth from '../features/auth/redux/slice';


const reducers = combineReducers({
    auth
});

export default reducers;