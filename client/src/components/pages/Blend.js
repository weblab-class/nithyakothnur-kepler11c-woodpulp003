import React, { useState, useEffect, useContext } from "react";
import Osc1 from "./controls/OscControl.js";
import Filter from "./controls/FilterControls.js";
import Keyboard from "./controls/KeyboardControls.js";
import ADSR from "./controls/ADSR.js";
import WaveCard from "../modules/WaveCard.js";
import { NewWave } from "../modules/NewWaveInput.js";
import { CTX } from "./context/Store.js";

import { get } from "../../utilities.js";

import "./Blend.css";

function Blend(props) {
  const [waves, setWaves] = useState([]);
  const [appState, updateState] = useContext(CTX);

  useEffect(() => {
    get("/api/waves", { userId: props.userId }).then((waveObj) => {
      let reversedWaveObjs = waveObj.reverse();
      setWaves(reversedWaveObjs);
    });
  }, [props.userId]);

  const addNewWave = (waveObj) => {
    setWaves([waveObj].concat(waves));
  };

  let wavesList = null;

  const hasWaves = waves.length !== 0;
  if (hasWaves) {
    wavesList = waves.map((waveObj) => (
      <WaveCard
        key={waveObj._id}
        _id={waveObj._id}
        userId={waveObj.userId}
        waveId={waveObj.waveId}
        wave={waveObj.wave}
        attack={waveObj.attack}
        decay={waveObj.decay}
        sustain={waveObj.sustain}
        release={waveObj.release}
        filterCutoff={waveObj.filterCutoff}
        filterQ={waveObj.filterQ}
        filterType={waveObj.filterType}
      />
    ));
  } else {
    wavesList = <div className="class-Container">No waves created!</div>;

  }

  return (

  
    <div class="flex flex-row items-center justify-between">
      {/* <h1>Basic Oscillator Maker</h1> */}
      <div class="flex flex-col items-center justify-between">
        <Osc1 />
        <NewWave
          addNewWave={addNewWave}
          userId={props.userId}
          wave={appState.osc1Settings.type}
          attack={appState.envelope.attack}
          decay={appState.envelope.decay}
          sustain={appState.envelope.sustain}
          release={appState.envelope.release}
          filterCutoff={appState.filterSettings.frequency}
          filterQ={appState.filterSettings.Q}
          filterType={appState.filterSettings.type}
      />
      {wavesList}
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <ADSR />
          <Filter />
        </div>
        <div class="relative bottom-0 center-0">
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default Blend;
