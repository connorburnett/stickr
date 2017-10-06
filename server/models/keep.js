var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imgurl: { type: String, required: true },
  UserId: { type: ObjectId, required: true },
  //owner: { type: ObjectId, ref: models.credentials.name, required: true },
  vaultId: { type: ObjectId }
});

module.exports = mongoose.model(models.keep.name, schema);

// This can be reused for other schemas