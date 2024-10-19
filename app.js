require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");//wont let it do put and post
const connectDB = require('./server/config/db');
const session = require('express-session');//keep me login stored in databased.
const passport = require('passport');//for login auth
const MongoStore = require('connect-mongo');


const app = express();
const port = process.env.PORT || 5000;

// Session and Passport setup
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI}),
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day
}));


app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
//connect DB
connectDB();

// Static files
app.use(express.static('public'));

// Template engine setup
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('layout','./layouts/front-page');
app.set('layout','./layouts/dashboard');
  // Ensure this is pointing to the correct directory
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

// Handle 404
app.get('*', function(req, res) {
  //res.status(404).send('404 Page Not Found.')
  res.status(404).render('404');
})

// Start server
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});


