// controllers for handling requests, we wire these up to our router
// jwt is for creating json web token, install jwt-simple
const jwt = require('jwt-simple');
const User = require('../models/User');
// get config directory which has the jwt secret string
// const config = require('../config');

// working with jwt, 
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  // encode userId because this wont change, as where a user can change there email
  // as a standard jwts have a sub, short for subject, which tells who this token is about
  // also want a timestamp, iat is issued at time. 
  // config.secret pulls the secret string
  //jwt.io is a great site to checkout
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user),
  user: req.user });
}

exports.signup = function(req, res, next) {
  // we save the email/pw entered here
  const email = req.body.email;
  const password = req.body.password;

    // this is a guard to ensure that they are providing both, mongodb would save them without if we didn't
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    // we call the user class schema and create a new one
    const user = new User({
      email: email,
      password: password
    });
    // one we create a new User we need to save it into our db, this handles that action
    user.save(function(err) {
      if (err) { return next(err); }

      // Repond to request indicating the user was created
      // we send back an identifying piece of information, the token, that the user can store and use in the future for authentication requests
      // when users + our secret string are added, we get a json web token(JWT). Then when they use that token, we will use our secret string to decrpypt the token their userId and authenticate
      // secret string is paramount to security, we can never let this accidently get out
      res.json({ token: tokenForUser(user),
      user: req.user });
    });
  });
}

exports.signinSocial = function(req, res, next) {
  res.send({ token: tokenForUser(req.user), user: req.user });
}