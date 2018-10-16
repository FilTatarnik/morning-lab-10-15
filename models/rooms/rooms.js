const mongoose = require('mongoose');
const Furniture = require('../furniture/furniture.js')

const roomsSchema = new mongoose.Schema({
	name: {type: String, required: true},
	purpose: {type: String, required: true},
	floor: {type: Number, required: true},
	furniture: [Furniture.schema]
})

module.exports = mongoose.model('Rooms', roomsSchema);