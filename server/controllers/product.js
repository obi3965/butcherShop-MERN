const { errorHandler } = require('../errorHandler/AppError');
const Product = require('../models/product');
const _= require('lodash')
const formidable = require('formidable');

const fs = require('fs');



exports.create = (req,res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true;
  form.parse(req, (err,fields, files) => {
      if(err){
          return res.status(400).json({
              error: 'Image could not be uploaded'
          })
      }
      // check for all fields
      const { name, description, category, author } = fields;

      if (!name || !description || !author || !category ) {
          return res.status(400).json({
              error: 'All fields are required'
          });
      }

      let product = new Product(fields)
      
      if(files.photo){
          product.photo.data = fs.readFileSync(files.photo.path)
          product.photo.contentType = files.photo.type
      }

      product.save((err, result)=>{
          if(err){
              return res.status(400).json({
                  error: errorHandler(err)
              })
          }
          res.json({
              result
          })
      })
  })
    
}


//Get a single product with param
exports.singleProduct = (req,res, next, id) =>{
    Product.findById(id).exec((err, product) => {
        if(err || !product){
            return res.status(404).json({
                error: errorHandler(err)
            })
        }
        req.product = product
           
         next()   
        
        
    })
    
}


//read a single product by id
exports.read = (req,res) =>{
    req.product.photo = undefined;
    return res.json(
       req.product 
    )
         
    
}


//Remove the product
exports.remove = (req,res) => {
    let product = req.product
    product.remove((err, deleteProduct)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            deleteProduct,
            message: "product deleted"
        })
    })
}


