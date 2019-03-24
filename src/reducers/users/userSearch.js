
const initialState = {
  users: [],
  isFetching: false,
  hasError: false
};

function userSearchReducer(state=initialState, action){
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return {
        ...state,
        users: action.items,
        isFetching: false,
        hasError: false
      };
    case 'START_SEARCH':
      return {
        ...state,
        users: [],
        isFetching: true,
        hasError: false
      };
    case 'SEARCH_ERROR':
      return {
        ...state,
        users: [],
        isFetching: false,
        hasError: true
      };
    default:
      return state
  }
}

export default userSearchReducer;