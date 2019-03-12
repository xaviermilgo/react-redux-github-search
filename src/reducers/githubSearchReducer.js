
const initialState = {
  users: [
    {
      "login": "reivan85",
      "id": 14281257,
      "node_id": "MDQ6VXNlcjE0MjgxMjU3",
      "avatar_url": "https://avatars0.githubusercontent.com/u/14281257?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/reivan85",
      "html_url": "https://github.com/reivan85",
      "followers_url": "https://api.github.com/users/reivan85/followers",
      "following_url": "https://api.github.com/users/reivan85/following{/other_user}",
      "gists_url": "https://api.github.com/users/reivan85/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/reivan85/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/reivan85/subscriptions",
      "organizations_url": "https://api.github.com/users/reivan85/orgs",
      "repos_url": "https://api.github.com/users/reivan85/repos",
      "events_url": "https://api.github.com/users/reivan85/events{/privacy}",
      "received_events_url": "https://api.github.com/users/reivan85/received_events",
      "type": "User",
      "site_admin": false,
      "score": 28.302588
    }
  ],
  isFetching: false,
  hasError: false,
  errorDetail: null
};

function githubSearchReducer (state=initialState, action){
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
        hasError: true,
        errorDetail: action.error
      };
    default:
      return state
  }
}

export default githubSearchReducer;