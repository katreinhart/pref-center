import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';



const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api', function(req, res) {
  res.send("Api initialized??");
})

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
