const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name:String,
	des:String,
	city:String,
	state:String,
	zip:Number
});

module.exports = mongoose.model("users", userSchema)