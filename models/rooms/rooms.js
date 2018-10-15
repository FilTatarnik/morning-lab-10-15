const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
	name: {type: String, required: true},
	purpose: {type: String, required: true},
	floor: {type: Number, required: true}
})

module.exports = mongoose.model('Rooms', roomsSchema);