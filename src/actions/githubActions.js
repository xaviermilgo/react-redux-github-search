import store from '../store'

export const SEARCH_USER = (data)=> {
  return {
    type:"SEARCH_USER",
    ...data
  }
};
export const START_SEARCH = ()=> {
  return {
    type:"START_SEARCH"
  }
};
export const SEARCH_RESULTS = (data)=> {
  return {
    type:"SEARCH_RESULTS",
    ...data
  }
};
export const SEARCH_ERROR = (error)=> {
  return {
    type:"SEARCH_ERROR",
    error: error
  }
};

export const SEARCH_ACTION_THUNK = (email, login, name) => {
  const data = {
    email: email.trim(),
    login: login.trim(),
    name: name.trim()
  };
  let q = '';
  console.log(data);
  for(let field in data){
    if(data[field] && data[field].length>0){
      q += `${data[field]}+in:${field}`
    }
  }
  store.dispatch(START_SEARCH());
  return function(dispatch, getState) {
    return fetch(`https://api.github.com/search/users?q=${q}`)
        .then(data => data.json())
        .then(data => {
          if (data.message === "Not Found") {
            //fancy error handle is coming here
            void 1
          } else {
            dispatch(SEARCH_RESULTS(data));
          }
        })
        .catch(err => dispatch(SEARCH_ERROR(err)));
  };
};