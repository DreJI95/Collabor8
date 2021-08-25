//import jwt functionality
const jwt = require('jsonwebtoken');
require('dotenv').config()

//Secret provided by environment variables
const secret = process.env.JWT_SECRET

//Token expires in 15 mins
const expirationTime = 60 * 15

//Sign a JWT token with professional data
function signToken(professional){
    //set the payload with data from the professional supplied
    const {_id, email, firstName, lastName} = professional
    const payload = {_id, email, firstName, lastName}

    //sign the JWT token and return it
    return jwt.sign({data: payload}, secret, {expiresIn: expirationTime});
}

//Middleware to parse the token
function authMiddleware({req}){
    //Get the token from the authorization header in format Authorization: Bearer <token>
    let token = req.headers.authorizaton.split(' ')[1];

    //if there is no token, return the request as normal
    if(!token) return req

    try{
        //try verifying the token and adding it to the request
        const {data} = jwt.verify(token, secret, {maxAge: expirationTime});
        req.professional = data
    }
    catch(err)
    {
        console.log("JWT not signed, Error: " + err);
    }

    //return the request with professional data or not
    return req;
}

module.exports = {signToken, authMiddleware};