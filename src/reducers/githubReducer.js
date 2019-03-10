
const initialState = {
  users: [],
  isFetching: false,
  hasError: false
};

function githubReducer (state=initialState, action){
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return state;
    case 'START_SEARCH':
      return state;
    case 'SEARCH_RESULTS':
      return state;
    default:
      return state
  }
}

export default githubReducer;