import store from "../../store";
import api from '../../api';

export const USER_REPO_RESULTS = (data)=> {
  return {
    type:"USER_REPO_RESULTS",
    data: data
  }
};
export const USER_REPO_ERROR = (error)=> {
  return {
    type:"USER_REPO_ERROR",
    error: error
  }
};
export const GET_USER_REPO_INFO = ()=> {
  return {
    type:"GET_USER_REPO_INFO"
  }
};

export default function fetch_user_repo_info(username){
  store.dispatch(GET_USER_REPO_INFO());
  return function(dispatch) {
    return api.get(`users/${username}/repos?per_page=1000`)
        .then(data => data.data)
        .then(data => {
          if (data.message === "Not Found") {
            //fancy error handle is coming here
            void 1
          } else {
            dispatch(USER_REPO_RESULTS(data));
          }
        })
        .catch(err => dispatch(USER_REPO_ERROR(err)));
  };
};