import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import apiRouter from './api';


const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', {
    content: 'Loading...'
  });
});

app.use('/api', apiRouter);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
