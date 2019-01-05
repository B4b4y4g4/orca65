const express = require('express');
const app = express();
const optionRoutes = express.Router();

let Option = require('../models/Option');
let Parameter = require('../models/Parameter');

// Defined store route
optionRoutes.route('/add').post(function (req, res) {
  let option = new Option({name: req.body.name, parameter: req.body.parameter});
  
  option.save()
    .then(option => {
      Parameter.findById(req.body.parameter,function(err, parameter){
        parameter.options.push(option._id);
        parameter.save()
        .then(parameter=>{
          res.status(200).json({'option': 'option is added successfully'});
        })
        .catch(err => {
          res.status(400).send("unable to attach option to category");
        });
      });
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
optionRoutes.route('/').get(function (req, res) {
    Option.find(function (err, options){
    if(err){
      console.log(err);
    }
    else {
      res.json(options);
    }
  });
});

// Defined edit route
optionRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Option.findById(id, function (err, option){
      res.json(option);
  });
});

//  Defined update route
optionRoutes.route('/update/:id').post(function (req, res) {
    Option.findById(req.params.id, function(err, option) {
    if (!option)
      res.json(new Error('Could not load Document'));
    else {
        option.name = req.body.name;
        option.save().then(option => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
optionRoutes.route('/delete/:id').get(function (req, res) {
    Option.findOneAndRemove({_id: req.params.id})
    .exec(function(err, removed) {
      Parameter.update(
        { },  { $pull: { options: { $in: removed._id }}}, function (err) {
          if (err)
              throw err;
          res.json({ success: true, message: "Deleted" });
        }
      );
    });
});

module.exports = optionRoutes;