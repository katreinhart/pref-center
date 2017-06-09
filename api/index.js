import express from 'express';

var Preferences = require('../model/prefs.js');
var bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/', (req, res) => {
  res.send({ message: 'API Initialized!' });
});

//adding the /prefs route to our /api router
router.route('/prefs')
  .get(function(req, res) {
    Preferences.find(function(err, prefs) {
      if (err)
        res.send(err);
      res.json(prefs)
    });
  })
 .post(function(req, res) {
    var prefs = new Preferences();
    console.log(req.body.name); // this is an empty object???
    // prefs.userName = req.body.name;
    prefs.id = Date.now();
    prefs.preferences = req.body.preferences;
    prefs.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: 'Prefs successfully added!'
      });
    });
  })
  .put(function(req, res) {
    //  Update
  })
  .delete(function(req, res) {
    // Destroy
  });

export default router;
