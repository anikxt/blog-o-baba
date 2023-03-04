import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://blog-o-baba-production.up.railway.app',
  responseType: 'json',
});

export default axios;
