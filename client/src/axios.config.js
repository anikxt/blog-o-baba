import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://simple-social-app-production.up.railway.app',
  // baseURL: 'http://localhost:8080',
  responseType: 'json',
});

export default axios;
