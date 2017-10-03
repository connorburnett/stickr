var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  ImgUrl: { type: String, required: true },
  UserId: { type: ObjectId, required: true }
});

module.exports = mongoose.model(models.keep.name, schema);

// This can be reused for other schemas