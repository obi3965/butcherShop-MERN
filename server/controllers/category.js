const { errorHandler } = require('../errorHandler/AppError')
const Category = require('../models/category')

exports.create = (req,res) => {
    const { name } = req.body
    const category = new Category({
        name
    })
   category.save((err, data) =>{
       if(err){
           return status(400).json({
               error: errorHandler(err)
           })
       }
       res.status(201).json({
           data
       })
   })
}