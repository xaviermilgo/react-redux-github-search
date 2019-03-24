import fetch_user_info from "./users/getInfo";
import fetch_user_repo_info from "./users/getRepos";
import fetch_user_following from "./users/getFollowing";
import fetch_user_followers from "./users/getFollowers";
import search_users from "./users/getUsers";

const user_thunks = {
  fetch_user_info: fetch_user_info,
  search_users: search_users,
  fetch_user_repo_info: fetch_user_repo_info,
  fetch_user_following: fetch_user_following,
  fetch_user_followers: fetch_user_followers,
};

export default user_thunks;