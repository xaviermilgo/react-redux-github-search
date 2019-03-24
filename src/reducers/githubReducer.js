import {combineReducers} from "redux";
import githubUsersReducer from "./githubUserReducer";

export default combineReducers({user: githubUsersReducer});