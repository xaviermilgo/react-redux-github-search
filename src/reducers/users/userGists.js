const defaultGists = [];
// userGists
const initialState = {
  gists: defaultGists,
  isFetching: false,
  hasError: false
};

function userGistsReducer(state=initialState, action){
  switch (action.type) {
    case 'GET_USER_GISTS_INFO':
      return {
        ...state,
        hasError: false,
        gists: [],
        isFetching: true
      };
    case 'USER_GISTS_RESULTS':
      return {
        ...state,
        gists: action.data,
        isFetching: false,
      };
    case 'USER_GISTS_ERROR':
      return {
        ...state,
        gists: [],
        isFetching: false,
        hasError: true
      };
    default:
      return state
  }
}

export default userGistsReducer;