const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('../model/sales');
const Sales = mongoose.model('Sales');

var view = "./views/"

router.get('/', async (req, res) => {
    res.render('sales')
});


router.post("/", async (req, res) => {
    const sales = new Sales(req.body);
    try {
      await sales.save();
      // res.send("Thank you for your registration!");
      res.redirect("/sales");
    } catch (err) {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    }
});





module.exports = router;