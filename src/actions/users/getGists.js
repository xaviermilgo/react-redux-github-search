import store from "../../store";
import api from "../../api";

export const USER_GISTS_RESULTS = (data)=> {
  return {
    type:"USER_GISTS_RESULTS",
    data: data
  }
};
export const GET_USER_GISTS_INFO = ()=> {
  return {
    type:"GET_USER_GISTS_INFO"
  }
};
export const USER_GISTS_ERROR = ()=> {
  return {
    type:"USER_GISTS_ERROR"
  }
};

export default function fetch_user_gists(username, page, per_page){
  store.dispatch(GET_USER_GISTS_INFO());
  return function(dispatch) {
    return api.get(`users/${username}/gists?page=${page}&per_page=${per_page}`)
        .then(data => data.data)
        .then(data => {
          if (data.message === "Not Found") {
            //fancy error handle is coming here
            void 1
          } else {
            dispatch(USER_GISTS_RESULTS(data));
          }
        })
        .catch(err => dispatch(USER_GISTS_ERROR(err)));
  };
};