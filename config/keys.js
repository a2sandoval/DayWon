// keys.js - figure out what set of credentials to return
// here is where we hide our google client keys so others can't find them on github
if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
  } else {
    // we are in development - return the dev keys!!!
    module.exports = require('./dev');
  }
  
  
  // we have a different db for production vs dev
  // we also make different api keys