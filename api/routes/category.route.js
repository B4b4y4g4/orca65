const express = require('express');
const app = express();
const categoryRoutes = express.Router();

// Require Category model in our routes module
let Category = require('../models/Category');
let Subcategory = require('../models/Subcategory');

// Defined store route
categoryRoutes.route('/add').post(function (req, res) {
  let category = new Category(req.body);
  category.save()
    .then(category => {
      res.status(200).json({'category': 'category is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save category to database");
    });
});

// Defined get data(index or listing) route
categoryRoutes.route('/').get(function (req, res) {
    Category.find({}).populate('subcategories').exec(function (err, categories){
      if(err){
        console.log(err);
      }
      else {
        res.json(categories);
      }
    });
});

// Defined edit route
categoryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Category.findById(id, function (err, category){
      res.json(category);
  });
});

//  Defined update route
categoryRoutes.route('/update/:id').post(function (req, res) {
    Category.findById(req.params.id, function(err, category) {
    if (!category)
      res.json(new Error('Could not load Document'));
    else {
        category.name = req.body.name;
        category.save().then(category => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
categoryRoutes.route('/delete/:id').get(function (req, res) {
    Category.findByIdAndRemove({_id: req.params.id}, function(err, category){
        if(err) res.json(err);
        else Subcategory.remove({category: category._id}, function (err) {
          if (err)
              throw err;
          res.json({ success: true, message: "Deleted" });
        });
    });
});

module.exports = categoryRoutes;