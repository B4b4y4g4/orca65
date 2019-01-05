const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Option = new Schema({
  name: {
    type: String,
    required:true
  },
  parameter: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Parameter'
  }
},{
    collection: 'option'
});


module.exports = mongoose.model('Option', Option);