const express = require('express');
const app = express();
const subCategoryRoutes = express.Router();

// Require Subcategory model in our routes module
let Subcategory = require('../models/Subcategory');
let Category = require('../models/Category');

// Defined store route
subCategoryRoutes.route('/add').post(function (req, res) {
  let subcategory = new Subcategory({name: req.body.name, category: req.body.category});
  
  subcategory.save()
    .then(subcategory => {
      Category.findById(req.body.category,function(err, category){
        category.subcategories.push(subcategory._id);
        category.save()
        .then(category=>{
          res.status(200).json({'subcategory': 'subcategory is added successfully'});
        })
        .catch(err => {
          res.status(400).send("unable to attach subcategory to category");
        });
      });
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
subCategoryRoutes.route('/').get(function (req, res) {
    Subcategory.find(function (err, subcategories){
    if(err){
      console.log(err);
    }
    else {
      res.json(subcategories);
    }
  });
});

// Defined edit route
subCategoryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Subcategory.findById(id, function (err, subcategory){
      res.json(subcategory);
  });
});

//  Defined update route
subCategoryRoutes.route('/update/:id').post(function (req, res) {
    Subcategory.findById(req.params.id, function(err, subcategory) {
    if (!subcategory)
      res.json(new Error('Could not load Document'));
    else {
        subcategory.name = req.body.name;
        subcategory.save().then(subcategory => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
subCategoryRoutes.route('/delete/:id').get(function (req, res) {
    Subcategory.findOneAndRemove({_id: req.params.id})
    .exec(function(err, removed) {
      Category.update(
        { },  { $pull: { subcategories: { $in: removed._id }}}, function (err) {
          if (err)
              throw err;
          res.json({ success: true, message: "Deleted" });
        }
      );
    });
});

module.exports = subCategoryRoutes;