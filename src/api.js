import axios from 'axios'

const GITHUB_API_KEY = 'fd37e2ac9975aefddb5532663c61e23f6c96fb65';

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Authorization': `token ${GITHUB_API_KEY}`
  }
});

export default api;