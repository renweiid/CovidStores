const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('../model/sales');
const Sales = mongoose.model('Sales');
const Products = require('../model/products')

var view = "./views/"


router.get('/', async (req, res) => {
  if (req.session.user){
    res.render('sales')
  }
  else{
    console.log("cant find session")
    res.redirect('/login')
  }
});


router.post("/", async (req, res) => {
  if (req.session.user) {  
    try {
      const sales = new Sales(req.body);
      // console.log(req.body);
      await sales.save();
      // res.send("Thank you for your registration!");
      res.redirect("/sales/salesentries");
    } catch (err) {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    }
  }
  else {
    console.log("cant find session")
    res.redirect('/login')
  }
});

// View sales

router.get('/salesentries', async (req, res) => {
  if (req.session.user) {
    try {
        let items = await Sales.find()
        if (req.query.name) {
          items = await Sales.find({ name: req.query.name })
        }
        res.render('salesentries', { users: items, currentUser:req.session.user})
      } catch (err) {
        res.status(400).send("unable to find items in the database");
      }
    } else {
      console.log("cant find session")
      res.redirect('/login')
  }
});

//Viewing items list

router.get('/salesitemlist', async (req, res) => {
  if (req.session.user) {
    try {
        let items = await Products.find()
        if (req.query.name) {
          items = await Products.find({ name: req.query.name })
        }
        res.render('salesitemlist', { users: items, currentUser:req.session.user})
      } catch (err) {
        res.status(400).send("unable to find items in the database");
      }
    } else {
      console.log("cant find session")
      res.redirect('/login')
  }
});

//Logging out 
router.get('/logout', (req, res) => {
  if (req.session){
      req.session.destroy(function (err){
          if (err){
            res.send("Failed to destroy session")
          }else{
              return res.redirect('/login');
        }
      })
  }
});



module.exports = router;