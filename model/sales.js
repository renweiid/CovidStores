const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

const registrationSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: 'please enter first name'
    },
    secondname: String,
    othername: String,
    email: String,
    nationalid: String,
    address1: String,
    address2: String,
    itemdescription: String,
    count: String,
    plan: {
      type: String,
      required: 'please enter plan'
    },
    initialpay: String,
    initialbalance: String
  });
  module.exports = mongoose.model('Sales', registrationSchema); 