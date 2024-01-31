import React, { useState, useEffect } from "react";
import SingleWave from "./SingleWave";
import "./WaveCard.css";

import { get } from "../../utilities";

/**
 * Card is a component for displaying content like waves
 *
 * Proptypes
 * @param {string} _id for the user
 * @param {string} userId
 * @param {string} waveId of the wave
 * @param {string} wave type of wave
 * @param {number} attack
 * @param {number} decay
 * @param {number} sustain
 * @param {number} release
 * @param {number} unisonVoice
 * @param {number} unisonDetune
 * @param {number} filterCutoff
 * @param {number} filterQ
 * @param {number} filterType
 */

const WaveCard = (props) => {
  const [chosenWave, setChosenWave] = useState("");
  return (
    <div className="Card-container">
      <SingleWave
        _id={props._id}
        userId={props.userId}
        waveId={props.waveId}
        wave={props.wave}
        attack={props.attack}
        decay={props.decay}
        sustain={props.sustain}
        release={props.release}
        filterCutoff={props.filterCutoff}
        filterQ={props.filterQ}
        filterType={props.filterType}
      />
    </div>
  );
};

export default WaveCard;
