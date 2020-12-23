const express = require('express')

const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById, read, updateUser } = require('../controllers/user')


//router.get('/user/:userId', requireSignin, isAuth, isAdmin, read )
router.get('/user/:userId', requireSignin, isAuth, read )
router.put('/user/:userId', requireSignin, isAuth, updateUser )
router.param('userId', userById)


module.exports = router