const User = require("../models/user.js");
const { errorHandler } = require("../errorHandler/AppError");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err),
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.status(200).json({
      user,
    });
  });
};

//Signin route
exports.signin = (req, res) => {
  //find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with this email is not exist, please signup",
      });
    }
    //if user is found make sure the email,password match
    //create authenticate method in user model
 if(!user.authenticate(password)){
    if(err || !user){
        return res.status(401).json({
            error: 'user email & password not match'
        })
    }
}
    

    //generate the signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN);
    res.cookie("t", token, { expire: new Date() + process.env.EXPIRES_IN });
    //return token and user to client
    const { _id, name, email, role } = user;
    return res.status(200).json({
      token,
      user: { _id, name, email, role },
    });
  });
};


//SIGNOUT ROUTE
exports.signout = (req,res) =>{
  res.clearCookie('t');
  res.json({message: "you are signed out now"})
}