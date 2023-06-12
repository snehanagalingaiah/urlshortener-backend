const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");
const moment = require('moment');

const shortUrlSchema = new Schema({

	fullUrl:
	{
		type:String,
		required:true
	},

	shortUrl:
	{
		type:String,
		required:true,
	    default: shortid.generate
	},

	clicks:
	{
       type:Number,
       required:true,
       default:0
	},

	createdBy:
	{
		type:Schema.Types.ObjectId,
		required:true,
        ref:'users'
	},
    
    createdAt:
	{
		type:Date,
	    default:moment(),

	}


})

const shortUrlModel = mongoose.model("shortUrl", shortUrlSchema )

module.exports = shortUrlModel;