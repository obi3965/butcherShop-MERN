const express = require('express')


const router = express.Router();

const {list, create, categoryById, singleCategory, deleteCategory, updateCategory } = require('../controllers/category')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');


router.get('/categories', list)
router.post('/category/create/:userId', requireSignin, isAuth,isAdmin, create)
router.get('/category/:categoryId/:userId' ,requireSignin, isAuth, isAdmin, singleCategory )
router.put('/category/:categoryId/:userId' ,requireSignin, isAuth, isAdmin, updateCategory )
router.delete('/category/:categoryId/:userId' ,requireSignin, isAuth, isAdmin, deleteCategory )

router.param('categoryId', categoryById)
router.param('userId', userById)


module.exports = router