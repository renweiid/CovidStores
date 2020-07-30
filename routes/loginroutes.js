const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login')
});

router.post('/', passport.authenticate('local'), (req, res) =>{
    req.session.user = req.user;
    res.redirect('/sales')
});



module.exports = router;