const User = require("../models/user");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "user not found",
      });
    }
    req.profile = user;
    next();
  });
};

//read the user profile
exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};


//update the user profile
exports.updateUser = (req,res) => {
  User.findByIdAndUpdate(
    {_id: req.profile._id},
    {$set: req.body},
    {new: true},
    (err, user) =>{
      if(err){
        return res.status(400).json({
          error: 'you are not authorized to perform this action'
        })
      }
      user.hashed_password = undefined;
      user.salt = undefined
      res.json(user)
    }

  )
}