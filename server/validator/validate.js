const { check, validationResult } = require('express-validator')


exports.userSignUpValidator = [ 
    check('name').notEmpty().withMessage(' Name is required'),
    check('email', "email must be between 3 to 32 characters").isEmail()
    .withMessage('valid email is required').isLength({min:4, max:32}),
    check('password').isLength({min:6}).withMessage('password must be at least 8 character long')

    
    

]

exports.userSignInRequest = [
     check('email', "email must be between 3 to 32 characters").isEmail()
    .withMessage('valid email is required').isLength({min:4, max:32}),
    check('password').isLength({min:6}).withMessage('password must be at least 8 character long'),
];



exports.isRequestValidated = async = (req,res,next) =>{
    const errors = validationResult(req)
    if(errors.array().length > 0){
        return res.status(400).json({
            error:errors.array()[0].msg
        })
    }
    next()
    }
