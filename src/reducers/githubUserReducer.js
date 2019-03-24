import userFollowersReducer from "./users/userFollowers";
import userFollowingReducer from "./users/userFollowing";
import userReposReducer from "./users/userRepos";
import userInfoReducer from "./users/userInfo";
import userSearchReducer from "./users/userSearch";
import {combineReducers} from "redux";

const reducerMap = {
  search: userSearchReducer,
  followers: userFollowersReducer,
  following: userFollowingReducer,
  repos: userReposReducer,
  info: userInfoReducer
};

export default combineReducers(reducerMap);