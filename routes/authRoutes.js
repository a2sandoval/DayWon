const Authentication = require('../controllers/authentication');
const passportLocal = require('../services/passport');
require('../models/User');
const passportFbSocial = require('../services/passportFB_OAuth');
const passportGoogSocial = require('../services/passportGoog_OAuth');
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
  
  // --------------------------------------------------------------------
  // Google OAuth
  // --------------------------------------------------------------------
  // auth routes for google's OAuth
  app.get(
    '/auth/google',
    // when a user comes to this route we want to kick them into an OAuth flow which is handled by passport
    // Here we tell passport to attempt to authenticate the user
    // GoogleStrategy has a piece of code that makes itself known as 'google', if anyone tries to authenticate with 'goole' passport knows to use googlestrat
    passport.authenticate('google', {
      // scope specifies the access that we want to have inside the users profile, google has a list of permissions we could ask for
      scope: ['profile', 'email']
    })
  );

  // this is where we will be redirected with the user code, google strategy can now handle the code and authorize 
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'), Authentication.signinSocial,
    (req, res) => {
      res.send(req.user);
    }
  );


  // --------------------------------------------------------------------
  // Facebook OAuth
  // --------------------------------------------------------------------


  app.get('/auth/facebook', 
  passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));

  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }), Authentication.signinSocial,
  function(req, res) {
    // Successful authentication, redirect home.
    res.send(req.user);
  });

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