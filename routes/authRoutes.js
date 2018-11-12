const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = app => {

// Load Input Validation
const validateRegisterInput = require('./validation/register');
const validateLoginInput = require('./validation/login');

// Load User model
const User = require('../models/User');

  // LOCAL 
  // --------------------------------------------------------------------
  app.get('/', (req, res) => {
    res.send({ hi: 'there' });
  });

  app.post('/api/signin', (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateLoginInput(req.body);
   // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
   const email = req.body.email;
  const password = req.body.password;
   // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }
     // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, email: user.email }; // Create JWT Payload
         // Sign Token
        jwt.sign(
          payload,
          process.env.secret,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
  });

  app.post('/api/signup', (req, res)=>{
    console.log(req.body);
    const { errors, isValid } = validateRegisterInput(req.body);
     // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
   User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default
      });
       const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
       bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
  });

   app.get('/api/logout', (req, res) => {
    // req.logout kills the cookie with the id
    req.logout();
    res.redirect('/');
  });

   app.get('/api/checkToken', (req, res) => { 
    console.log(req.headers.token);
    console.log(req.headers);
    console.log(req.headers.authorization);
      if (req.headers.token) {
        console.log(req.headers.token);
          var token = req.headers.token;
          jwt.verify(token, process.env.secret, (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                res.json({
                    message: 'Successful log in',
                    authorizedData
                });
                console.log('SUCCESS: Connected to protected route');
              }
            });
            var decoded = jwt.verify(token, process.env.secret)
            console.log("iddddd");
            console.log(decoded);
      }
  
  });
  
  app.get('/api/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
});


// Google --------------------------------------------------------------------------

  // here we tell passport how it should use the strategy, with new GoogleStrategy we create a new instance where we then tell the strategy how to configure the application for auth
passport.use(
  new GoogleStrategy(
    {
      //clientId and secret are provided directly from googles service, we have to sign up with google for this
      // we send a path to the google keys
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // this is the route the user gets directed back to after google servers give us a code permission
      // we use a relative path for development, but in production we should have this as the url of the site, with https: and everything. We could also make a change to the google strategy which we tell it heroku's proxy is okay (see that below)
      callbackURL: '/auth/google/callback',
      proxy: true
    }, 
    // for our second argument we have a callback function 
    // once google redirects us with the code, we send it back to them, exchanging it for info about the user, when we get that info this callback is called holding the user profile data
    // instead of using promises we use new js2017 syntax called async where we still work with promises, but we don't need .then, instead we put async in front of the function to tell js it will be asyncronous then we place in 'await' for the asyn and save it to a variable. Then we can continue with it as if it is all handled 

    async (accessToken, refreshToken, profile, done) => {
      // accessToken is what is used if the user grants us permission to view profile/make posts for them
      // we figure out all of the data we need by doing console logs
      // knowing the id is within profile we check to see if this id is in our database
      // we use the profile id rather than email since users can change emails, they shouldn't be changing google's id
      // before creating a new user we will always check first to ensure that they don't already have one
      // look through the User collection, find the first reference of a google id matching the profile.id, NOTE: this is async, where we get a promise
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // done tells passport we're finished, proceed with the authentication, done gets 2 args, first is error, second is the userRecord
        return done(null, existingUser);
      }
      // we create a new User instance from the User class then save it to the database
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

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
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/surveys');
  }
);

app.get('/api/google/logout', (req, res) => {
  // req.logout kills the cookie with the id
  req.logout();
  res.redirect('/');
});


}