const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// bcrypt is an extremely popular library for encripting passwords. Remember we need to always encript, huge no no to just save the pw to the database, install with npm install bcrypt-nodejs

// this object defines all the different properties we'll have
const userSchema = new Schema({
  // here we pass the properties to the model
  // always need type, because email gets additional properties we wrap it in an object
  // emails need to be unique, also mongoose doesn't force case, meaning if one is uppercase and the other is upper, it'll see them as different emails, so here we force it to be lowercase before handling. NOte: it can be hard to understand at first
  name: String,
  email: { type: String, unique: true, lowercase: true },
  // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  password: String,
  picture: String,
  userMaxes: 
    {
      type: Schema.Types.ObjectId,
      ref: "usermaxes"
    },
  historicalWorkouts: Array,
  settings: 
    {
      type: Schema.Types.ObjectId,
      ref: 'settings'
    }
});


const UserClass = mongoose.model('user', userSchema);

// Export the model
module.exports = UserClass;
