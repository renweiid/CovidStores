const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const registrationSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: 'please enter first name'
    },
    lastname: String,
    nationalid: String,
    address: String,
    email: {
      type: String,
      unique: true
    },
    username: String,
    password: {
      type: String,
      required: 'please enter password'
    },
  });
  registrationSchema.plugin(passportLocalMongoose);
  module.exports = mongoose.model('Registration', registrationSchema); 