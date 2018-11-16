const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
  weight: {
    type: String,
    default: "lb"
  },
  program: {
    type: String,
    default: "Juggernaut"
  },
  timePerSet: {
    type: Number,
    default: 180
  },
  weightIncrement: {
    type: Number,
    default: 2.5
  }
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
