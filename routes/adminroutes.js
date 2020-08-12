const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('../model/products');
const Registration = require('../model/registration');
const Products = mongoose.model('Products');
const Sales = require('../model/sales')
// const Products = require('../model/products');

var view = "./views/"

router.get('/login', (req, res) => {
    res.render('login')
});


// Get and displays a register page
router.get('/register', (req, res) => {
    res.render('register')
})

//Post new users 
router.post('/register', async (req, res) => {
  if (req.session.user) {
  try {
    const items = new Registration(req.body);
    await Registration.register(items, req.body.password, (err) => {
      if (err) { throw err }
      res.redirect('/userlist')
    })
  } catch (err) {
     res.status(400).send('Sorry! Something went wrong.')
     console.log(err)
    }
  }
})

// Display product entry page
router.get('/productentry', async (req, res) => {
  res.render('productentry')
});

// Post new products data
router.post('/productentry', async (req, res) => {
    if (req.session.user) {
      const Productitems = new Products(req.body);
      try {
        console.log(req.body);
        
        await Productitems.save();
          
          res.redirect('/admin/itemlist');
        
      } catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
      }
  }
  else {
    console.log("cant find session")
    res.redirect('/login')
  }

  
});



// Viewing the userlist from the Registrations collection
router.get('/userlist', async (req, res) => {
  if (req.session.user) {
    try {
        let items = await Registration.find()
        if (req.query.gender) {
          items = await Registration.find({ gender: req.query.gender })
        }
        res.render('users', { users: items, currentUser:req.session.user})
      } catch (err) {
        res.status(400).send("unable to find items in the database");
      }
    } else {
      console.log("cant find session")
      res.redirect('/login')
  }
});

// Deleting a user 
router.post("/delete", async (req, res) => {
  if (req.session.user) {
  try {
    await Registration.deleteOne({_id: req.body.id })
    res.redirect('back')
  } catch (error) {
     res.status(400).send("unable to delete to database");
  }
} else {
  console.log("cant find session")
  res.redirect('/login')
}
});


// Displaying content from the sales collection 
router.get('/admin', async (req, res) => {
  if (req.session.user) {
    try {
        let items = await Sales.find()
        if (req.query.name) {
          items = await Sales.find({ name: req.query.name })
        }
        res.render('admin', { users: items, currentUser:req.session.user})
      } catch (err) {
        res.status(400).send("unable to find items in the database");
      }
    } else {
      console.log("cant find session")
      res.redirect('/login')
  }
});


router.get('/itemlist', async (req, res) => {
  if (req.session.user) {
    try {
        let items = await Products.find()
        if (req.query.name) {
          items = await Products.find({ name: req.query.name })
        }
        res.render('itemlist', { users: items, currentUser:req.session.user})
      } catch (err) {
        res.status(400).send("unable to find items in the database");
      }
    } else {
      console.log("cant find session")
      res.redirect('/login')
  }
});


module.exports = router;