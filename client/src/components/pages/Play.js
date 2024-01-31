import React, { useState, useEffect } from "react";
import WaveCard from "../modules/WaveCard.js";

import { NewWave } from "../modules/NewWaveInput.js";
import { get } from "../../utilities.js";

const Play = (props) => {
  const [waves, setWaves] = useState([]);

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
        waveId={waveObj.waveId}
        attack={waveObj.attack}
      />
    ));
  } else {
    wavesList = <div className="class-Container">No waves created!</div>;
  }

  return (
    <>
      <NewWave addNewWave={addNewWave} userId={props.userId} />
      {wavesList}
      {/* {console.log("Play -> userId is: ", props.userId)}
      {console.log("testing that userId exists ^^")} */}
    </>
  );
};

export default Play;
