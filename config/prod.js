// prod.js - production keys here!!
// we tell it to check the environement for the keys, values are pulled from heroku env variables
// make sure not to git ignore this, heroku will need to review
// in heroku settings is where you will set up the environment variables, enter in all the keys and values needed
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    facebookClientID: "",
    facebookClientSecret: "",
    mongoURI: process.env.MONGO_URI
  };
  