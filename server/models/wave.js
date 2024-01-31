const mongoose = require("mongoose");

const WaveSchema = new mongoose.Schema({
  userId: String,
  waveId: String,
  wave: String,
  attack: Number,
  decay: Number,
  sustain: Number,
  release: Number,
  unisonVoice: Number,
  unisonDetune: Number,
  filterCutoff: Number,
  filterQ: Number,
  filterType: String,
});

// compile model from schema
const WaveModel = mongoose.model("wave", WaveSchema); 
module.exports = WaveModel
