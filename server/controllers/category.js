const { errorHandler } = require("../errorHandler/AppError");
const Category = require("../models/category");
const Product = require("../models/product");

exports.create = (req, res) => {
  const { name } = req.body;
  const category = new Category({
    name,
  });
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.status(201).json({
      data,
    });
  });
};

//get the category By Id
exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "category is not exist",
      });
    }
    req.category = category;
    next();
  });
};

//read the category by id
exports.singleCategory = (req, res) => {
  return res.status(200).json(req.category);
};

//get all categories
exports.list = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

//update the category by id
exports.updateCategory = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

//delete category by id
exports.deleteCategory = (req, res) => {
  const category = req.category;
  Product.find({ category }).exec((err, data) => {
    if (data.length >= 1) {
      return res.status(400).json({
        message: `Sorry. You cant delete ${category.name}. It has ${data.length} associated products.`,
      });
    } else {
      category.remove((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        res.json({
          message: "Category deleted",
        });
      });
    }
  });
};
