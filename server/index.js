const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes');
const pg = require('pg');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const models = require('../db/models.js');

app.use(express.static('public'));
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Passport Middleware
app.use(session({ secret: 'teambeam', resave: false,
  saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Connect all routes to app
app.use('/', routes);



// passport.use(new LocalStrategy((username, password, done) => {
//   models.User.byUsername(username)
//   .then((user) => {})
//   .then((pass)=>{})
//   .catch((err) => {
//     throw err;
//   });
// }));



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
