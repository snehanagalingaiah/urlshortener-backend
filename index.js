const express = require("express");
const dotenv = require("dotenv");
const mongo = require("./connect");
const userRouter = require("./router/user")
const shortUrlRouter = require("./router/shortUrl")
const cookiParser = require("cookie-parser");
var cors = require("cors");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cookiParser());
const corsConfig = { origin:true, credentials: true}
app.use(cors(corsConfig));
app.options(`*`,cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', `https://urlshorten-frontend.netlify.app`);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);

 mongo.connectdb();

 app.use("/", (req,res,next) =>{
 	console.log("Middleware");
 	next();
 });

 app.use("/user",userRouter);
 app.use("/shorturl", shortUrlRouter)

 app.listen(process.env.PORT)
