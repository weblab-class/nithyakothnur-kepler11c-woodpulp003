
import React, { useState, useEffect, useContext } from "react";
import WaveCard from "../modules/WaveCard.js";

import { NewWave } from "../modules/NewWaveInput.js";
import { get } from "../../utilities.js";

import { CTX } from "./context/Store.js";

const Play = () => {
  const [waves, setWaves] = useState([]);
  const [appState, updateState] = useContext(CTX);

  useEffect(() => {
    get("/api/waves").then((waveObj) => {
      let reversedWaveObjs = waveObj.reverse();
      setWaves(reversedWaveObjs);
    });
  }, []);

  const addNewWave = (waveObj) => {
    setWaves([waveObj].concat(waves));
  };

  let wavesList = null;

  const hasWaves = waves.length !== 0;

  console.log(appState.envelope.attack);
  // HI NITHYA LOOK HERE DO IT LIKE THIS!!!
  // let id = "attack";
  // let value = 1.5;

  updateState({ type: "CHANGE_ADSR", payload: { id, value } });
  if (hasWaves) {
    wavesList = waves.map((waveObj) => (
      <WaveCard
        key={waveObj._id}
        _id={"HAPPY COW"}
        waveId={waveObj.waveId}
        attack={waveObj.attack}
      />

      //  * Proptypes
      //  * @param {string} userId for the user
      //  * @param {string} waveId of the wave
      //  * @param {string} wave type of wave
      //  * @param {number} attack
      //  * @param {number} delay
      //  * @param {number} sustain
      //  * @param {number} release
      //  * @param {number} unisonVoice
      //  * @param {number} unisonDetune
      //  * @param {number} filterCutoff
      //  * @param {number} filterQ
      //  * @param {number} filterType
      //  */
    ));
  } else {
    wavesList = <div>No waves created!</div>;
  }

  return (
    <>
      <NewWave addNewWave={addNewWave} />
      {wavesList}
    </>
  );
};

export default Play;