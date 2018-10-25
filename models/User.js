const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// bcrypt is an extremely popular library for encripting passwords. Remember we need to always encript, huge no no to just save the pw to the database, install with npm install bcrypt-nodejs
const bcrypt = require('bcrypt-nodejs');

// this object defines all the different properties we'll have
const userSchema = new Schema({
  // here we pass the properties to the model
  // always need type, because email gets additional properties we wrap it in an object
  // emails need to be unique, also mongoose doesn't force case, meaning if one is uppercase and the other is upper, it'll see them as different emails, so here we force it to be lowercase before handling. NOte: it can be hard to understand at first
  email: { type: String, unique: true, lowercase: true },
  // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  password: String,
  bpMax: {
    type: Number,
    validate: [
      // Function takes in the new `longstring` value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 6;
      },
      // Error Message
      "You don't lift that much."
    ]
  },
  dlMax: {
    type: Number,
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "You don't lift that much."
    ]
  },
  sqtMax: {
    type: Number,
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "You don't lift that much."
    ]
  },
  mpMax: {
    type: Number,
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "You don't lift that much."
    ]
  },
  historicalMaxes: {
    type: Schema.Types.ObjectId,
    ref: 'UserMaxes'
  },
  historicalWorkouts: {
    type: Schema.Types.ObjectId,
    ref: 'Workout'
  }
});

// On Save Hook, encrypt password
// Before saving a model, run this function
// literally means pre save, before saving, run this function
userSchema.pre('save', function(next) {
  // get access to the user model
  const user = this; // user is now an instance of the user model, allows us to use user.email, user.password

  // generate a salt then run callback, salt takes time
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      // overwrite plain text password with encrypted password
      user.password = hash;
      // then save the model
      next();
    });
  });
});

// whenever we create a user object, it will have access to anything function defines on this methods property
// this will compare the cnadidatePassword (what the user used to sign in) and compare it to the this.password which is a reference to our hashed and salted password
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  // bycrpt does the salt/hash process to candidate pass to then compare
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

// Create the model class
// this loads the schema into mongoose which corresponds to a collection called user
// note its a modelclass, so it represents all users
//TODO:
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
