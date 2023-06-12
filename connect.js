const mongo = require("mongoose");
 
module.exports.connectdb = async() => {
try{
    await mongo.connect(process.env.MONGOOSE_URL);
    console.log("connected")
}
catch(err){
    console.log(err);
   
}
}