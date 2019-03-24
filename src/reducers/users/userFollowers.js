const defaultFollowers = [];

// userFollowers
const initialState = {
  followers: defaultFollowers,
  isFetching: false,
  hasError: false
};

function userFollowersReducer(state=initialState, action){
  switch (action.type) {
    case 'GET_USER_FOLLOWERS_INFO':
      return {
        ...state,
        hasError: false,
        followers: [],
        isFetching: true
      };
    case 'USER_FOLLOWERS_RESULTS':
      return {
        ...state,
        followers: action.data,
        isFetching: false,
      };
    case 'USER_FOLLOWERS_ERROR':
      return {
        ...state,
        followers: [],
        isFetching: false,
        hasError: true
      };
    default:
      return state
  }
}

export default userFollowersReducer;