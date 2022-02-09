import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:8080',
  responseType: 'json',
});

export default axios;
