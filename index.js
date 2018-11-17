const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
// express doesn't know how to handle cookies, this helps
const morgan = require('morgan');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cors = require('cors');
// these are just require statements because we need to link them to the index.js but we don't need to use them in any of the code below

require('./models');

mongoose.Promise = global.Promise;
// we pass the address of the mongo instance we crated on mlab.com. Each project on there will give us a uri. We place it in config to hide from people



// THIS IS FOR FINAL PRODUCTION RENDERING
if(process.env.mongoURI){
  mongoose.connect(process.env.mongoURI)  
} else {
  mongoose.connect("mongodb://localhost/DayWon", {
  useMongoClient: true
})
}

const app = express();
// all app.use are middlewares that get applied to our app before the route handlers, you can also place them elsewhere if you don't want all these middlewares being used between all routes handlers
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());
app.use(require('express-session')({ secret: "fur babies", resave: true, saveUninitialized: true }));

// requiring routes
require('./routes/authRoutes')(app);
require('./routes/apiRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));

  // Express will serve up the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// whenever heroku runs our application it has the ability to inject envirnoment variables, which is herokus opportunity to send us runtime configs, this variable will run out application through heroku, however to run in dev envirnoment we need a local port (5000 here)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
