import React, { useState, useEffect } from "react";
import SingleWave from "./SingleWave";

import { get } from "../../utilities";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id for the user
 * @param {string} waveId of the wave
 * @param {string} wave type of wave
 * @param {number} attack
 * @param {number} delay
 * @param {number} sustain
 * @param {number} release
 * @param {number} unisonVoice
 * @param {number} unisonDetune
 * @param {number} filterCutoff
 * @param {number} filterQ
 * @param {number} filterType
 */

const WaveCard = (props) => {
  const [waves, setWaves] = useState([]);

  useEffect(() => {
    get("/api/waves").then((waveObj) => {
      let reversedWaveObjs = waveObj.reverse();
      setWaves(reversedWaveObjs);
    });
  });

  return (
    <div className="Card-container">
      <SingleWave _id={props._id} waveId={props.waveId} attack={props.attack} />
    </div>
  );
};

export default WaveCard;
