const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userMaxesSchema = new Schema({
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
  }
});

const MaxesClass = mongoose.model('UserMaxes', userMaxesSchema);

// Export the model
module.exports = MaxesClass;
