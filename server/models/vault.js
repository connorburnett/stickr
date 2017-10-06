var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	userId: { type: ObjectId, required: true },
	keeps: { type: Array, default: [] }
});

module.exports = mongoose.model(models.vault.name, schema);