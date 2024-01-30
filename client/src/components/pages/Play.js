import React, { useState, useEffect } from "react";
import WaveCard from "../modules/WaveCard.js";

import { NewWave } from "../modules/NewWaveInput.js";
import { get } from "../../utilities.js";

const Play = () => {
  const [waves, setWaves] = useState([]);

  // useEffect(() => {
  //   get("/api/waves").then((waveObj) => {
  //     let reversedWaveObjs = waveObj.reverse();
  //     setWaves(reversedWaveObjs);
  //   });
  // }, []);

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
        waveId={waveObj.waveId}
        attack={waveObj.attack}
      />
      
    ));
  } else {
    wavesList = <div>No waves created!</div>;
  }

  return (
    <>
      <div>
        <h3>Sign up or login to save your soundwave creations. </h3>
      </div>
      <div>
        <NewWave addNewWave={addNewWave} />
        {wavesList}
      </div>
    </>
  );
};

export default Play;
