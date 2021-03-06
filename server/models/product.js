const mongoose = require('mongoose');


const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength: 32,
        trim:true
    },
    description: {
        type: String,
        required:true,
        maxLength: 2000
      },

      price:{
        type:Number,
        maxLength: 32,
        trim:true,
        required:true
    },
    category: {
        type: ObjectId,
        ref:'Category',
        required:true
      },
    quantity:{
        type: Number
    },
    photo:{
        data: Buffer,
        contentType:String
    },
    sold: {
        type: Number,
        default: 0
    },
    shipping:{
        required:false,
        type:Boolean
    }
    
}, { timestamps: true})


module.exports = mongoose.model('Product', productSchema)