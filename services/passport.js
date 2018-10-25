//passport helps us answer whether the user is logged in or not
const passport = require('passport');
const User = require('../models/User');
// passport is kind of like an ecosystem, there are strategies for how to check if a user is logged in, one strategy is to verify the user with a JWT, the other is to verify with a username and password. Many different strategies you can look at such as fb login, google, etc
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// local strategy will try to auth a user based on email/password, we would need to do this when they are signing in because they wont have a token yet
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email' };
// needs to look for email as the username field, the password is handled automatically, but passport expects there to be a username in the property of request, since we are just using email we need to specify this, for access to username: look at email property in request
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  User.findOne({ email: email }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }

    // compare passwords - is `password` equal to user.password?
    // use method we created on user.js which compares db hash/salt pass to password submitted when it is hashed/salted
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }

      return done(null, user);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  // we tell it that whenever a request comes in that we need to handle, look the request header and find authorization
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // tell it the secret it should use to decode this token
  //TODO: fix
  secretOrKey: "Hi There"
};

// Create JWT strategy
// first arg is option from above, second is funct whenver a user trys to login with a jwt, payload is decoded jwt token
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that other
  // otherwise, call done without a user object
  // we're checking for a user with the given id
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      // done without an error and that user
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
