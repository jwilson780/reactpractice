import express from 'express';
//import fs from 'fs';
import config from './config';
import apiRouter from './api';

const server = express();//creates server in express

server.get('/', (req, res) =>{
	res.send('Hello express\n');
});

//need to use nginX to handle static assets in production
//express will take care of serving the content when requested

server.use('/api', apiRouter);

server.use(express.static('public'));

//Manually routing using FS
//	fs.readFile('./about.html', (err,data) =>{
//		res.send(data.toString());//callback gives acces to files data as a buffer
//	});
//});

server.listen(config.port, () =>{
	console.info("express listening on port", config.port);
});
