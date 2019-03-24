const userInfo = {};

// userInfo
const initialState = {
  userInfo: userInfo,
  isFetching: false,
  hasError: false
};

function userInfoReducer(state=initialState, action){
  switch (action.type) {
    case 'GET_USER_INFO':
      return {
        ...state,
        userInfo: {},
        isFetching: true,
        hasError: false
      };
    case 'USER_INFO_RESULTS':
      return {
        ...state,
        userInfo: action.data,
        isFetching: false,
        hasError: false,
      };
    case 'USER_INFO_ERROR':
      return {
        ...state,
        userInfo: {},
        isFetching: false,
        hasError: true
      };

    default:
      return state
  }
}

export default userInfoReducer;