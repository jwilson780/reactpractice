import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const server = express();

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.use(bodyParser.json());
server.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({initialMarkup, initialData}) => {
      res.render('index',{
        initialMarkup,
        initialData
      });
    })
    .catch(error => {
      console.log(error);
      res.status(404).send('Bad Request');

    });
});

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
