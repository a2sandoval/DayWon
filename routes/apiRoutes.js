const jwt = require('jsonwebtoken');
const db = require('../models');
const userId = require('../services/userId');

module.exports = app => {

  app.get('/api/user/:id', (req, res) => {

  })

  app.post('/api/user', (req, res) => {
    console.log(req.body);
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
        var newUser = new db.User({ email: req.body.email, name: req.body.name, picture: req.body.picture})
        newUser.save(err => {
          console.log(newUser);
          if (err) return res.status(500).send(err);
          return res.status(200).send(newUser);
        })
      } else {
      console.log(user);
      return res.send(user);
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


  app.get('/api/settings', function(req, res){
    console.log(req.body);
    // need userid
    db.User.findById(req.body.user.userId, (err, user) => {
      if (err) return handleError(err);
      if (!user.settings){
        console.log("no settings");
          var newSettingsData = new db.Settings({})
          newSettingsData.save(err => {
            console.log(newSettingsData);
            if (err) return res.status(500).send(err);
            return res.status(200).send(newSettingsData);
          }).then(() => {
            db.User.findByIdAndUpdate(req.body.userId, {
              userMaxes: newSettingsData._id
          }, (err, user) => {
            if (err) return handleError(err);
            console.log(user);
          }
          )
          })     
    }
    else {
     db.Settings.findById(user.settings).then((settings) => {
       console.log(settings);
       console.log("settings");  
       res.send(settings);
     })
    }
  }
  )
  })

  app.post('/api/settings', function(req, res){
    console.log(req.body);
    User.findById(req.body.user.userId, 'program', (err, user) => {
      if (err) return handleError(err);
      console.log(user);
      res.send(user)
    }
  )
  })

  app.get('/api/day', (req, res) => {
    // can combine this with accessory lifts 
    User.findById(req.body.userId, 'historicalWorkouts', (err, workouts) => {
      if (err) return handleError(err);
      if (!workouts){
        return;
        // will have state with predetermined day 1, etc
      }
      var lastWorkout = workouts.length - 1;
      console.log(workouts);
      var day = workouts.length;
      console.log(day);
      res.send(day);
    })
  })

  app.post('/api/workout', (req,res) => {
    var date= Date();
    // console.log(req.body);
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
    var workoutData= [req.body.workoutEntered]
    var date = Date();
    workoutData.date = date;
    console.log(workoutData);
    console.log("Submitted Workout");
      db.User.findByIdAndUpdate(req.body.user.userId, {$push: {historicalWorkouts: workoutData}}, {new:true}, (err, user) => {
        console.log(user);
        var update = {
          [updateWorkout]: parseInt(req.body.maxForWorkout),
        }
        console.log(update);
        var pushUpdate = { historicalMaxes: { 
              bpMax: parseInt(req.body.maxes.bpMax),
              sqtMax: parseInt(req.body.maxes.sqtMax),
              mpMax: parseInt(req.body.maxes.mpMax),
              dlMax: parseInt(req.body.maxes.dlMax), 
              date: date
            }
          }
          console.log(pushUpdate);
        db.UserMaxes.findByIdAndUpdate(user.userMaxes, {$set: update, $push: pushUpdate}, {new: true}, (err, userMax) => {
            res.send(user)
        })
      })
    })

  app.get('api/accesoryLift', (req, res) => {
    console.log(req.body);
    // will need all accessory lifts listed
    User.findById(req.body.userId, 'historicalWorkouts', (err, workouts) => {
      if (err) return handleError(err);
      console.log(workouts);
      var lastWorkout = workouts.length - 1;
      // array to find last
      // findLast of accessory lift, return weight entered to accessoryLift weight, this will be called on every day rendered, and week will call with all.
      // make a list of last weight used in a reducer
    })
  })

}