const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Category = new Schema({
  name: {
    type: String
  },
  subcategories: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory'
  }]
},{
    collection: 'category'
});

module.exports = mongoose.model('Category', Category);