const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activationStringSchema = new Schema({

	userId:
	{
		type:Schema.Types.ObjectId,
		required:true,
		unique:true,
        ref:'users'
	},
	token:
	{
		type:String,
		required:true
	},
	createdAt:
	{
		type:Date,
	   default:Date.now(),
	   	expires:3600  //1hr

	}
})

const activationStringModel = mongoose.model("activationString", activationStringSchema )

module.exports = activationStringModel;