const express = require('express')

const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById, read } = require('../controllers/user')


router.get('/user/:userId', requireSignin, isAuth, isAdmin, read )
router.param('userId', userById)


module.exports = router