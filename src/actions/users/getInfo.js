import store from "../../store";
import api from '../../api';

export const USER_INFO_ERROR = (error)=> {
  return {
    type:"USER_INFO_ERROR",
    error: error
  }
};
export const USER_INFO_RESULTS = (data)=> {
  return {
    type:"USER_INFO_RESULTS",
    data: data
  }
};
export const GET_USER_INFO = ()=> {
  return {
    type:"GET_USER_INFO"
  }
};


export default function fetch_user_info(username){
  store.dispatch(GET_USER_INFO());
  return function(dispatch) {
    return api.get(`users/${username}`)
        .then(data => data.data)
        .then(data => {
          if (data.message === "Not Found") {
            //fancy error handle is coming here
            void 1
          } else {
            dispatch(USER_INFO_RESULTS(data));
          }
        })
        .catch(err => dispatch(USER_INFO_ERROR(err)));
  };
};