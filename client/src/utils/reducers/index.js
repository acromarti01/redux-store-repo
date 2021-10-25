import { combineReducers } from "redux";
import reducer from "./reducers.js"

const reducers = combineReducers(
    {                
        store: reducer
    }
);

export default reducers;