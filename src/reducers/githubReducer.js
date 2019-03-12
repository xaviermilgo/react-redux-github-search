import {combineReducers} from "redux";
import githubSearchReducer from "./githubSearchReducer";
import githubUserReducer from "./githubUserReducer";

export default combineReducers({search:githubSearchReducer, user: githubUserReducer});