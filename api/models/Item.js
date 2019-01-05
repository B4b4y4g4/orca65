const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
  name: {
    type: String,
    required: true
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  parameters:[{
    type: mongoose.Schema.Types.ObjectId, ref: 'Parameter'
  }],
  quantity:[{
    type: mongoose.Schema.Types.ObjectId, ref: 'Quantity',
    required: true
  }]
},{
    collection: 'item'
});

module.exports = mongoose.model('Item', Item);