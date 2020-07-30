const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Registration = require('../model/registration');

var view = "./views/"

router.get('/', (req, res) => {
    res.render('login')
});


// get and displays a register page
router.get('/', (req, res) => {
    res.render('register')
})


router.post("/", async (req, res) => {
  try {
    const items = new Registration(req.body);
    await Registration.register(items, req.body.password, (err) => {
      if (err) { throw err }
      res.redirect('/login')
    })
  } catch (err) {
     res.status(400).send('Sorry! Something went wrong.')
     console.log(err)
  }
})






module.exports = router;