const jwt = require("jsonwebtoken");


const authenticate = async (req,res,next) =>{

  console.log("API authenticate")

	// Check whether access token exists in headers
     if (!req.headers['access-token'])
    return res.status(400).send( "Token not found" );

   //verify token
    try {
    const user = jwt.verify(req.headers['access-token'], process.env.JWT_SECRET);
    req.body.currentUser= user;
    next();

  } 
  catch (err) {
    console.error(err);
    return res.status(400).send( "Unauthorised" );
  }


}

module.exports = authenticate;