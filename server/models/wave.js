const mongoose = require("mongoose");

const WaveSchema = new mongoose.Schema({
  userId: String,
  waveId: String,
  wave: String,
  attack: Number,
  delay: Number,
  sustain: Number,
  release: Number,
  unisonVoice: Number,
  unisonDetune: Number,
  filterCutoff: Number,
  filterQ: Number,
  filterType: String,
});

// compile model from schema
module.exports = mongoose.model("wave", WaveSchema);