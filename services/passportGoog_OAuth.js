const passport = require('passport');
// we only care about the strategy property so we place a .Strategy at the end of the oauth20 we're requiring
// strategy specifies to passport how we want to authenticate users
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
require('../models/User');
const keys = require('../config/keys');

// this code connects us to the MongoDB database searching for the collection users
// The user object is now our model class, giving us a handle to the collection. We use the class to make new instances and save them to the database
const User = mongoose.model('user');

// this is all done for handling cookies
// once the new user is saved to the db, we pull that user from the database to serialize an indentifiable piece for our cookie
passport.serializeUser((user, done) => {
  // 1st arg is error, second is the id that mongo has created for the user in the db, user.id is a shortcut to reference mongos id it created, in the object it will look like you need to do more
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // here we look for the user in the mongoDB
  User.findById(id).then(user => {
    done(null, user);
  });
});
// here we tell passport how it should use the strategy, with new GoogleStrategy we create a new instance where we then tell the strategy how to configure the application for auth
passport.use(
  new GoogleStrategy(
    {
      //clientId and secret are provided directly from googles service, we have to sign up with google for this
      // we send a path to the google keys
      clientID: keys.googleClientID,
      clientSecret: keys.googleClSentSecret,
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
      const existingUser = await User.findOne({ email: profile.id });

      if (existingUser) {
        // done tells passport we're finished, proceed with the authentication, done gets 2 args, first is error, second is the userRecord
        return done(null, existingUser);
      }
      // we create a new User instance from the User class then save it to the database
      const user = await new User({ email: profile.id }).save();
      done(null, user);
    }
  )
);
