const mongoose = require('mongoose');

const furnitureSchema = new  mongoose.Schema({
	name: String,
	material: String
});

module.exports = mongoose.model('Furniture', furnitureSchema);