//fetch data from api
//for search engine optimization

import axios from 'axios';
import config from './config';

axios.get(`${config.serverURL}/api/contests`)
  .then(resp =>{
    console.log(resp.data);
  });
