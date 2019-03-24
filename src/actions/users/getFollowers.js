import store from "../../store";

export const GET_USER_FOLLOWERS_INFO = ()=> {
  return {
    type:"GET_USER_FOLLOWERS_INFO"
  }
};
export const USER_FOLLOWERS_RESULTS = (data)=> {
  return {
    type:"USER_FOLLOWERS_RESULTS",
    data: data
  }
};
export const USER_FOLLOWERS_ERROR = ()=> {
  return {
    type:"USER_FOLLOWERS_ERROR"
  }
};

export default function fetch_user_followers(username, page, per_page){
  store.dispatch(GET_USER_FOLLOWERS_INFO());
  return function(dispatch) {
    return fetch(`https://api.github.com/users/${username}/followers?page=${page}&per_page=${per_page}`)
        .then(data => data.json())
        .then(data => {
          if (data.message === "Not Found") {
            //fancy error handle is coming here
            void 1
          } else {

            dispatch(USER_FOLLOWERS_RESULTS(data));
          }
        })
        .catch(err => dispatch(USER_FOLLOWERS_ERROR(err)));
  };
};