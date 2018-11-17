
const db = require('../models');

module.exports = app => {

  
  
  app.post('/api/user', (req, res) => {
    var updates = {
      name: req.body.name,
      picture: req.body.picture,
    }
    db.User.findOneAndUpdate({ 'email': req.body.email }, {$set: updates} , (err, user) => {
      console.log(user);
      if (err) {
        return handleError(err);
      }
      // if a new user
      if (!user) {
        
        var dataId, settingsId;
        
        var newMaxData = new db.UserMaxes({
            bpMax: null,
            sqtMax: null,
            mpMax: null,
            dlMax: null, 
            historicalMaxes: []
          })
        var newSettingsData = new db.Settings({weight: "lb", program: "juggernaut", timePerSet: 180, weightIncrement: 2.5})
        
        // newMaxData.save(err => {
        //     if (err) return res.status(500).send(err);
        //     dataId = newMaxData._id;
        //     console.log(dataId);
        //     return dataId
        //   }).then((maxData) => {
        //     console.log(maxData);
        //     console.log(dataId);
            newSettingsData.save(err => {
              if (err) return res.status(500).send(err);
              settingsId = newSettingsData._id;
              console.log(settingsId);
              return settingsId
                }).then((res) => {
                  console.log(res);
                  console.log(dataId);
                  var newUser = new db.User({ email: req.body.email, name: req.body.name, picture: req.body.picture, historicalWorkouts: [], userMaxes: null, settings: res._id})
                  newUser.save(err => {
                    console.log(newUser);
                    if (err) return res.status(500).send(err);                 
                })  
                })
          
        
       
        
      } else {
        // var userObj = {}
        // // console.log(user);
        // var userMax = db.UserMaxes.findById(user.userMaxes).then(userMaxPopulated => {
        //   console.log(userMaxPopulated);
        //   return userMaxPopulated
        //   }) 

        // var settings = db.Settings.findById(user.settings).then(settings => {
        //     // userObj= {...userMaxPopulated, ...settings };
        //     // console.log(userObj);
        //     console.log(settings);
        //     return settings
        //     })
        // userObj = {...settings, ...userMax}
        // console.log(userObj);
        res.send(user)
          }
        })
      })

  app.post('/api/update-maxes', (req, res) => {
    console.log(req.body);
    var date= Date();
      db.User.findById(req.body.userId, (err, user) => {
        console.log(user);
        if (!user.userMaxes){
          console.log("no max");
          var newMaxData = new db.UserMaxes({
            bpMax: parseInt(req.body.benchpress),
            sqtMax: parseInt(req.body.squat),
            mpMax: parseInt(req.body.military),
            dlMax: parseInt(req.body.deadlift), 
            historicalMaxes: {
              bpMax: parseInt(req.body.benchpress),
              sqtMax: parseInt(req.body.squat),
              mpMax: parseInt(req.body.military),
              dlMax: parseInt(req.body.deadlift), 
              date: date
            }
          })
          newMaxData.save(err => {
            console.log(newMaxData);
            if (err) return res.status(500).send(err);
            return res.status(200).send(newMaxData);
          }).then(() => {
            db.User.findByIdAndUpdate(req.body.userId, {
              userMaxes: newMaxData._id
          }, (err, user) => {
            if (err) return handleError(err);
            console.log(user);
          }
          )
          })          
          // })
        } else {
          console.log("else");
          var update = {
            bpMax: parseInt(req.body.benchpress),
            sqtMax: parseInt(req.body.squat),
            mpMax: parseInt(req.body.military),
            dlMax: parseInt(req.body.deadlift)
          }
          var pushUpdate = { historicalMaxes: { 
                bpMax: parseInt(req.body.benchpress),
                sqtMax: parseInt(req.body.squat),
                mpMax: parseInt(req.body.military),
                dlMax: parseInt(req.body.deadlift), 
                date: date
              }
            }
          db.UserMaxes.findByIdAndUpdate(user.userMaxes, {$set: update, $push: pushUpdate}, {new: true}, (err, userMax) => {
            console.log(err);
            console.log(userMax);
            console.log("updates"); 
            res.send(userMax)
          })
  
        }
    })
     
      db.User.findById(req.body.userId).populate('userMaxes').then(user => {
        console.log(user);
      }) 
    
  })


  app.get('/api/settings/:id', function(req, res){
     db.Settings.findById(req.params.id).then((settings) => {
      console.log("lgging settings");  
      console.log(settings); 
       res.send(settings);
  }
  )
  })

  app.post('/api/update-settings/:id',  (req,res) => {
    console.log(req.body);
    db.Settings.findByIdAndUpdate(req.params.id, req.body).then((settings) => {
  })
})

  app.post('/api/userMaxes', function(req, res){
    console.log(req.body);
    db.UserMaxesfindById(req.body.user.userMaxes).then((userMaxes) => {
      if (err) return handleError(err);
      console.log(userMaxes);
      res.send(userMaxes)
    }
  )
  })


  app.post('/api/workout', (req,res) => {
    var date= Date();
    console.log(req.body);
    var updateWorkout;
    switch (req.body.workoutDay) {
      case "Squat":
        updateWorkout = "sqtMax"
        break;
      case "Benchpress":
        updateWorkout = "bpMax"
        break;
      case "Military Press":
        updateWorkout = "mpMax"
        break;
      case "Deadlift":
        updateWorkout = "dlMax"
        break;
      default:
        break;
    }
    var workoutData= req.body.workoutEntered
    var date = Date();
    workoutData.date = date;
    workoutData.workout = req.body.workoutDay.workout;

    console.log("Submitted Workout");
      db.User.findByIdAndUpdate(req.body.user.userId, {$push: {historicalWorkouts: workoutData}}, {new:true}, (err, user) => {
        console.log(user);
      })
      var update = {
        [updateWorkout]: parseInt(req.body.maxForWorkout),
      }
      var pushUpdate = { historicalMaxes: { 
            bpMax: parseInt(req.body.maxes.bpMax),
            sqtMax: parseInt(req.body.maxes.sqtMax),
            mpMax: parseInt(req.body.maxes.mpMax),
            dlMax: parseInt(req.body.maxes.dlMax), 
            date: date
          }
        }
      db.UserMaxes.findByIdAndUpdate(req.body.user.maxesId, {$set: update, $push: pushUpdate}, {new: true}, (err, userMax) => {
        console.log("userMaxes");
          console.log(userMax);
          res.send(userMax)
      })
    })

  //   app.get('/api/accessory-lifts/:id', (req, res) => {
  //     console.log("found me!");
  //     console.log(req.params.id);
  //     db.User.findById(req.params.id).then((user) => {
  //       console.log(user);
  //       var lastWorkout = user.historicalWorkouts.length - 1;
  //       if (lastWorkout === 0) {
  //         return null
  //       } 
  //       accObj = {};
  //       var keys = [];
  //       for (i = lastWorkout; i>= (lastWorkout - 3); i--){
  //         if (i <= 0) {
  //           return;
  //         }
  //         keys = Object.keys(user.historicalWorkouts[i])
  //         for (let workout of keys) {
  //           if (workout === "date" || workout === "workout"){
  //             return
  //           }
  //           accObj[workout] = user.historicalWorkouts[i][workout]["1"]["weight"]
  //         }
  //       }
  //       console.log(accObj);
  //       accObj.lastWorkout = user.historicalWorkouts[lastWorkout]["workout"];
  //       res.send(accObj);
  //   })
  // })

}