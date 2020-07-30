const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('../model/registration');
const Registration = mongoose.model('Registration');

var view = "./views/"

router.get('/', async (req, res) => {
    res.render('register')
});


router.post("/", async (req, res) => {
    
    try {
      const items = new Registration(req.body);
      await Registration.register(items, req.body.password, err => {
        //DB errors
        if (err) {
          throw err;
        }
        res.redirect('/login')
      });
      // DB cannot be reached
    } catch (err) {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    }
});
  
  





module.exports = router;