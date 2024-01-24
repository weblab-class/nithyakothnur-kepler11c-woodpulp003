import React, { useState, useEffect } from "react";
import WaveCard from "../modules/WaveCard.js";

import { NewWave } from "../modules/NewWaveInput.js";
import { get } from "../../utilities.js";

const Play = () => {
  const [waves, setWaves] = useState([]);

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
