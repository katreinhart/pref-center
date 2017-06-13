import express from 'express';

var Preferences = require('../model/prefs.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  // extended: true
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
    prefs.userName = req.body.name;
    prefs.createdAt = Date.now();
    prefs.preferences = req.body.preferences;
    prefs.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: 'Prefs successfully added!'
      });
    });
  });

router.route('/prefs/:id')
  .get(function(req, res) {
    // implement this in a try/catch block so that an incorrect ID doesn't break server?
    let uid = mongoose.Types.ObjectId( req.params.id );
    Preferences.findById(req.params.id, (err, pref) => {
      if(err) res.send(err);
      res.send(pref);
    });
  })
  .put(function(req, res) {
    let uid = mongoose.Types.ObjectId( req.params.id );
    Preferences.findById(uid, function (err, pref) {
      if(err) res.send(err);
      (req.body.userName) ? pref.name = req.body.userName : null;
      (req.body.preferences) ? pref.preferences = req.body.preferences : null;

      // This is sending even if the comment isn't updated.
      pref.save(function(err) {
        if(err)
          res.send(err);
        res.json({ message: 'Comment has been updated'});
      });
    });

  })
  .delete(function(req, res) {
    let uid = mongoose.Types.ObjectId( req.params.id );

    Preferences.remove({ _id: req.params.id }, (err, pref) => {
      if(err) res.send(err);
      res.json({ message: 'Comment has been deleted'});
    });

  });

export default router;
