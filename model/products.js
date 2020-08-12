const mongoose = require('mongoose');


const productsSchema = new mongoose.Schema({
    productname: {
      type: String,
      required: 'please enter product name'
    },
    serialnumber: String,
    price: String,
    additionaldetails: String,
    category: String,
    image: String
  });
  module.exports = mongoose.model('Products', productsSchema); 