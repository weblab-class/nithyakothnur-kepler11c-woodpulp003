import React, { useState } from "react";
import * as Tone from "tone";
import WaveformControls from "./newcontrols/WaveformControls";
import ADSRControls from "./newcontrols/ADSRControls";
import FilterControls from "./newcontrols/FilterControls";

// Initialize a new synth with a square waveform
const synth = new Tone.Synth({
  oscillator: {
    type: "square",
  },
}).toDestination();

const filter = new Tone.BiquadFilter({
  frequency: 1000,
  type: "lowpass",
  rolloff: -24,
}).toDestination();

synth.connect(filter);

// Set the default frequency to 440Hz
synth.frequency.value = 440;
let isSpacebarPressed = false;

function NewBlend() {
  const [synthType, setSynthType] = useState("square");
  const [ADSRSettings, setADSRSettings] = useState({
    attack: synth.envelope.attack,
    decay: synth.envelope.decay,
    sustain: synth.envelope.sustain,
    release: synth.envelope.release,
  });
  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    type: filter.type,
  });

  const changeSynthType = (e) => {
    let { id } = e.target;
    setSynthType(id);
    synth.oscillator.type = id;
  };

  const changeADSR = (e) => {
    let { value, id } = e.target;
    setADSRSettings({ ...ADSRSettings, [id]: value });
    synth.envelope[id] = value;
  };

  const changeFilter = (e) => {
    let { value, id } = e.target;
    setFilterSettings({ ...filterSettings, [id]: value });
    filter[id].value = value;
  };

  const changeFilterType = (e) => {
    let { id } = e.target;
    setFilterSettings({ ...filterSettings, type: id });
    filter.type = id;
  };

  document.addEventListener("keydown", function (event) {
    // Check if the pressed key is the spacebar
    if (event.key === " " && !isSpacebarPressed) {
      // Start a new oscillator when spacebar is pressed
      isSpacebarPressed = true;
      synth.triggerAttack(synth.frequency.value);
      console.log("key pressed");
    }
  });

  // Event listener for the spacebar keyup event
  document.addEventListener("keyup", function (event) {
    // Check if the released key is the spacebar
    if (event.key === " ") {
      // Stop the oscillator when spacebar is released
      isSpacebarPressed = false;
      synth.triggerRelease();
      console.log("key released");
    }
  });

  return (
    <div className="body">
      <WaveformControls type={synthType} changeType={changeSynthType} />
      <ADSRControls settings={ADSRSettings} change={changeADSR} />
      <FilterControls
        settings={filterSettings}
        change={changeFilter}
        changeType={changeFilterType}
      />
    </div>
  );
}

export default NewBlend;
