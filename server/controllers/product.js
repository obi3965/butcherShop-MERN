const { errorHandler } = require("../errorHandler/AppError");
const Product = require("../models/product");
const lodash = require("lodash");
const formidable = require("formidable");

const fs = require("fs");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    // check for all fields
    const { name, description, category, author } = fields;

    if (!name || !description || !author || !category) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let product = new Product(fields);

    if (files.photo) {
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({
        result: result
      });
    });
  });
};

//Get a single product with param
exports.singleProduct = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(404).json({
        error: errorHandler(err),
      });
    }
    req.product = product;

    next();
  });
};

//read a single product by id
exports.read = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};


/**
 * sell / arrival
 * by sell = /products?sortBy=sold&order=desc&limit=4
 * by arrival = /products?sortBy=createdAt&order=desc&limit=4
 * if no params are sent, then all products are returned
 */

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Product.find()
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json({
                result:products.length,
                products:products
            });
        });
};


//product based on query
exports.listRelated = (req,res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  Product.find({_id: {$ne: req.product}, category: req.product.category})
  .limit(limit)
  .populate("category" , '_id name')
  .exec((err, products) => {
      if(err){
          return res.status(400).json({
              error: 'products not found'
          })
      }
      res.json({
          result:products.length,
          products:products
      });
  })
}

//Remove the product
exports.remove = (req, res) => {
  let product = req.product;
  product.remove((err, deleteProduct) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      deleteProduct:deleteProduct,
      message: "product deleted",
    });
  });
};

//Update the Product
exports.updateProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    let product = req.product;
    product = lodash.extend(product, fields);
    if (files.photo) {
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({
        result:result
      });
    });
  });
};
