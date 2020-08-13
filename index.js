const express = require('express');
const bodyParser= require('body-parser');

// requiring expressSession
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const passport = require('passport');
require('dotenv').config();
// requiring mangoose
const mongoose = require('mongoose');


const registrationRoutes = require('./routes/registrationroute');
const loginRoutes = require('./routes/loginroutes');
const salesRoutes = require('./routes/salesagentsroutes');
const indexRoutes = require('./routes/indexroutes');
const adminroutes = require('./routes/adminroutes');
const Register = require('./model/registration');
const Sales = require('./model/sales');

const app = express();




//DB
mongoose.connect('mongodb://localhost:27017/CovidStores', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});



//template engine(pug)
app.set('view engine', 'pug')
app.set('views', './views');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}))
// express session confgs
app.use(expressSession);



// Passport settings
app.use(passport.initialize());
app.use(passport.session());

// Local authentication
passport.use(Register.createStrategy());
passport.serializeUser(Register.serializeUser());
passport.deserializeUser(Register.deserializeUser());



app.use('/register', registrationRoutes);
app.use('/login', loginRoutes);
app.use('/sales', salesRoutes);
app.use('/index', indexRoutes);
app.use('/admin', adminroutes);

// route for un existing files
app.get('*', (req, res) => {
    res.send('error, provide an accurate URL')
})


//listening for requests: the server
app.listen(4000, () => console.log('listening on port 4000')); 