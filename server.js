import config, { mongoDBcred } from './config';
import apiRouter from './api';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

const server = express();

// var Preferences = require('./model/prefs.js');

server.set('view engine', 'ejs');

mongoose.connect(`mongodb://${mongoDBcred}@ds157621.mlab.com:57621/kat-mern-comment-box`);

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello Preference Center!'
  });
});

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, () =>{
  console.info('Express server listening on port ', config.port);
});
