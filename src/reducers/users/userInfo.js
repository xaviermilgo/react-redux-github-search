const userInfo = {
    "login": "reivhax",
    "id": 21027237,
    "node_id": "MDQ6VXNlcjIxMDI3MjM3",
    "avatar_url": "https://avatars3.githubusercontent.com/u/21027237?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/reivhax",
    "html_url": "https://github.com/reivhax",
    "followers_url": "https://api.github.com/users/reivhax/followers",
    "following_url": "https://api.github.com/users/reivhax/following{/other_user}",
    "gists_url": "https://api.github.com/users/reivhax/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/reivhax/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/reivhax/subscriptions",
    "organizations_url": "https://api.github.com/users/reivhax/orgs",
    "repos_url": "https://api.github.com/users/reivhax/repos",
    "events_url": "https://api.github.com/users/reivhax/events{/privacy}",
    "received_events_url": "https://api.github.com/users/reivhax/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Xavier Kibet",
    "company": "@moringaschool",
    "blog": "https://xavier-portfolio.herokuapp.com/",
    "location": "Kenya",
    "email": null,
    "hireable": null,
    "bio": "Meaning is a jumper that you have to knit yourself",
    "public_repos": 36,
    "public_gists": 0,
    "followers": 53,
    "following": 39,
    "created_at": "2016-08-14T21:10:10Z",
    "updated_at": "2019-02-22T11:41:45Z"
  };

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