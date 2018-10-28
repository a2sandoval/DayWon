const Authentication = require('../controllers/authentication');
const passportLocal = require('../services/passport');
require('../models/User');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

// this app arrow function that wraps all the code allows us to call use our app function and we export it to our index.js (with the server)
module.exports = app => {

  // --------------------------------------------------------------------
  // LOCAL 
  // --------------------------------------------------------------------
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.get('/api/logout', (req, res) => {
    // req.logout kills the cookie with the id
    req.logout();
    res.redirect('/');
  });
  
  //TODO: change this later!!!
  app.get('/home', (req, res) => {
    res.redirect('/');
  })

  app.get('/profile', 
  function(req, res){
    //  TODO: all of this
    //db.User.find({})
    // .populate("UserMaxes Workout")
    // .then(function(dbUser) {
    //   // If any Libraries are found, send them to the client with any associated Books
    //   res.json(dbUser);
    // })
    res.send( req.user );

  });

    // test to make sure we are getting our user after auth process is complete
    app.get('/api/current_user', (req, res) => {
      res.send(req.user);
    });
  };
