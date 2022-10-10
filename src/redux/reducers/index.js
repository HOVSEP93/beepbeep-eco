// rootReducer

import { combineReducers } from "redux";
import addItemReducer from "./addItem";

const rootReducers=combineReducers({
    addItemReducer 
})

export default rootReducers;