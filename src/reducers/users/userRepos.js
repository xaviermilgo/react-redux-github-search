const defaultRepos = [];

// userRepos
const initialState = {
  userRepos: defaultRepos,
  isFetching: false,
  hasError: false
};

function userReposReducer(state=initialState, action){
  switch (action.type) {
    case 'GET_USER_REPO_INFO':
      return {
        ...state,
        userRepos: [],
        hasError: false,
        isFetching: true
      };
    case 'USER_REPO_RESULTS':
      return {
        ...state,
        userRepos: action.data,
        isFetching: false,
        hasError: false
      };
    case 'USER_REPO_ERROR':
      return {
        ...state,
        userRepos: [],
        hasError: true,
        isFetching: false
      };
    default:
      return state
  }
}

export default userReposReducer;