const express = require('express');
const app = express();
const parameterRoutes = express.Router();

let Parameter = require('../models/Parameter');
let Subcategory = require('../models/Subcategory');

// Defined store route
parameterRoutes.route('/add').post(function (req, res) {
  let category = new Parameter(req.body);
  category.save()
    .then(category => {
      res.status(200).json({'parameter': 'parameter is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save parameter to database");
    });
});

// Defined get data(index or listing) route
parameterRoutes.route('/').get(function (req, res) {
    Parameter.find({}).populate('options').exec(function (err, parameters){
      if(err){
        console.log(err);
      }
      else {
        res.json(parameters);
      }
    });
});

// Defined edit route
parameterRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Parameter.findById(id, function (err, parameter){
      res.json(parameter);
  });
});

//  Defined update route
parameterRoutes.route('/update/:id').post(function (req, res) {
    Parameter.findById(req.params.id, function(err, parameter) {
    if (!parameter)
      res.json(new Error('Could not load Parameter'));
    else {
        parameter.name = req.body.name;
        parameter.systemName = req.body.systemName;
        parameter.save().then(parameter => {
          res.json('Update parameter complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
parameterRoutes.route('/delete/:id').get(function (req, res) {
    Parameter.findByIdAndRemove({_id: req.params.id}, function(err, parameter){
        if(err) res.json(err);
        else Option.remove({parameter: parameter._id}, function (err) {
          if (err)
              throw err;
          res.json({ success: true, message: "Deleted" });
        });
    });
});

module.exports = parameterRoutes;