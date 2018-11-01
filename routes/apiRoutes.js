const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = app => {

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })

  app.post('/api/new_user', (req, res) => {
    
  })


  app.get('/api/program', function(req, res){
  })

  app.post('/api/workout', (req,res)=> {
    console.log(req.body);
    User.findById(req.body.userId, function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log("user");
      }
    })
  })

  app.get('/*', (req, res) => {
    res.redirect('/');
  })

}
