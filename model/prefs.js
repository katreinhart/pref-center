'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrefsSchema = new Schema ({
  createdAt: Number,
  userName: String,
  preferences: [String]
});

module.exports = mongoose.model('Preferences', PrefsSchema);
