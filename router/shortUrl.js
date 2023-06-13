const express = require('express');
const router = express.Router();
const shortUrlModel = require("../model/shortUrl");


//API TO CREATE NEW SHORT URL

router.post("/create", async(req,res, next) => {
  try{
	//const newUrl = await new shortUrlModel({...req.body}).save()
	const urlData = new shortUrlModel({...req.body});
	const newUrl = await urlData.save();
	console.log("full url", newUrl);
	res.status(200).send(newUrl);
      }
   catch(err)
   {
        console.log("catch block error");
        res.status(400).send("Iternal server error");
   }
})

//API TO REDIRECT TO A FULL URL FROM THE SHORTURL

router.get("/:shortid", async(req,res) =>{
   try {
	const urlObj = await shortUrlModel.findOne({shortUrl:req.params.shortid});
	urlObj.clicks ++;
	urlObj.save();
	res.redirect(urlObj.fullUrl);
       }
   catch(err){
      res.status(400).send("Wrong url typed")
    }
})

//API TO FETCH ALL CREATED URLS BY A PARTICULAR USER

router.get("/getall/:userid", async(req,res) => {
   console.log("API TO FETCH ALL CREATED URLS BY A PARTICULAR USER HIT")
     try
	{
           console.log("user id", req.params.userid);
           const urlDocs = await shortUrlModel.find({createdBy:req.params.userid});
	   res.status(200).send(urlDocs);
	}
     catch(err)
	{
           console.log(err);
          res.status(400).send("No short Url reated by the user");
	}
 })

module.exports = router;
