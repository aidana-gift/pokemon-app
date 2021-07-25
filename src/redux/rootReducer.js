import {combineReducers} from "redux";
import {favReducer, getReducer} from "./reducer";

const rootReducer = combineReducers({
    getReducer,
    favReducer
})

export default rootReducer;