const express = require('express');
const router = express.Router();


var view = "./views/"

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/electronics',(req, res) => {
    res.render('electronics')
});

router.get('/fitness', (req, res) =>{
    res.render('fitness')
});

router.get('/furniture', (req, res) =>{
    res.render('furniture')
});

router.get('/machinery', (req, res) =>{
    res.render('machinery')
});




module.exports = router;