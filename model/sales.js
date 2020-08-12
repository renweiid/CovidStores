const mongoose = require('mongoose');


const salesSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: 'please enter first name'
    },
    secondname: String,
    othername: String,
    email: String,
    nationalid: String,
    address: String,
    telephone: String,
    itemdescription: String,
    count: String,
    plan: {
      type: String,
      required: 'please enter plan'
    },
    initialpay: String,
    initialbalance: String
  });
  module.exports = mongoose.model('Sales', salesSchema); 