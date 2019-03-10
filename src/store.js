import {applyMiddleware, createStore} from "redux";
import githubReducer from "./reducers/githubReducer"
import thunk from "redux-thunk";


const store = createStore(githubReducer, applyMiddleware(thunk));
export default store