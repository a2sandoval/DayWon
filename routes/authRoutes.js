const Authentication = require('../controllers/authentication');
const passportLocal = require('../services/passport');
require('../models/User');
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

}