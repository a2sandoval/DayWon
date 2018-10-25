const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const workoutSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  // here we pass the properties to the model
  // always need type, because email gets additional properties we wrap it in an object
  // emails need to be unique, also mongoose doesn't force case, meaning if one is uppercase and the other is upper, it'll see them as different emails, so here we force it to be lowercase before handling. NOte: it can be hard to understand at first
  workoutdata: Array
});

module.exports = mongoose.model("Workout", workoutSchema);