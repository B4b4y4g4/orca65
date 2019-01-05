const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Subcategory = new Schema({
  name: {
    type: String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Category'
  }
},{
    collection: 'subcategory'
});


module.exports = mongoose.model('Subcategory', Subcategory);