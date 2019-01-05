const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Quantity = new Schema({
  amount: {
    type: Number
  },
  options: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Option'
  }],
  item: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Item'
  }
},{
    collection: 'quantity'
});


module.exports = mongoose.model('Quantity', Quantity);