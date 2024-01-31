import React from "react";

import "./SingleWave.css";

/**
 * Wave is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id for the user
 * @param {string} userId
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

const SingleWave = (props) => {
  return (
    <div className="card_style">
      <p>{props.waveId}</p>
    </div>
  );
};

export default SingleWave;
