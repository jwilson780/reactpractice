//fetch data from api
//for search engine optimization
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/app';

import axios from 'axios';
import config from './config';

const renderServer = () => {
  return axios.get(`${config.serverURL}/api/contests`)
    .then(resp =>{
      return {
        initialMarkup: ReactDOMServer.renderToString(
        <App initialContests={resp.data.contests}/>
      ),
        initialData: resp.data
      };
    });
};

export default renderServer;
