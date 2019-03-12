import store from "../store";

export const GET_USER_INFO = ()=> {
  return {
    type:"GET_USER_INFO"
  }
};
export const API_RESULTS = (data)=> {
  return {
    type:"API_RESULTS",
    data: data
  }
};
export const GET_ERROR = (error)=> {
  return {
    type:"GET_ERROR",
    error: error
  }
};

export const USER_ACTION_THUNK = (username) => {
  store.dispatch(GET_USER_INFO());
  return function(dispatch) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(data => data.json())
        .then(data => {
          if (data.message === "Not Found") {
            //fancy error handle is coming here
            void 1
          } else {
            dispatch(API_RESULTS(data));
          }
        })
        .catch(err => dispatch(GET_ERROR(err)));
  };
};