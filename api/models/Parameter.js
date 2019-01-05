const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Parameter = new Schema({
  name: {
    type: String,
    required: true
  },
  systemName: {
    type: String,
    required: true
  },
  options: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Option'
  }]
},{
    collection: 'parameter'
});


module.exports = mongoose.model('Parameter', Parameter);