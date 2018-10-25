// app.get('/api/')

module.exports = app => {

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })

  app.post('/api/new_user', (req, res) => {
    
  })


  app.get('/api/program', function(req, res){
  })

  app.post('/api/workout/:id', (req,res)=> {
    User.findById(req.param.id, function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(req.body);
      }
    })
  })

}
