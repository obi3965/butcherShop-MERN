const express = require('express');


const router = express.Router()

//validator
const { userSignUpValidator, isRequestValidated } = require('../validator/validate')


//importing the routes
const { signup, signin, signout } = require('../controllers/auth')



router.post('/signup', userSignUpValidator, isRequestValidated, signup)
router.post('/signin', signin) 
router.get('/signout', signout) 





module.exports = router