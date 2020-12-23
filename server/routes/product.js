const express = require('express');


const router = express.Router()


const { create, singleProduct, read, remove, updateProduct, list, listRelated, listCategories, listBySearch, photo } = require('../controllers/product')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');


router.get('/products', list)
router.get('/product/:productId', read )
router.get('/products/related/:productId', listRelated )
router.get('/products/categories', listCategories)
router.post("/products/bySearch", listBySearch);
router.get('/products/photo/:productId', photo)
router.post('/product/create/:userId', requireSignin, isAuth,isAdmin, create)
router.delete('/product/:productId/:userId', requireSignin, isAuth,isAdmin, remove )
router.put('/product/:productId/:userId', updateProduct)
router.param('userId', userById)
router.param('productId', singleProduct)


module.exports = router