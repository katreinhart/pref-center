import config, { mongoDBcred, mongoDBserv } from './config';
import apiRouter from './api';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

const server = express();

server.set('view engine', 'ejs');

mongoose.connect(`mongodb://${mongoDBcred}@${mongoDBserv}/kat-mern-comment-box`);

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Loading...'
  });
});

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, () =>{
  console.info('Express server listening on port ', config.port);
});
