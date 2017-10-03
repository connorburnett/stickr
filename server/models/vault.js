var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	UserId: { type: ObjectId, required: true },
	KeepId: { type: ObjectId }
});

module.exports = mongoose.model(models.vault.name, schema);