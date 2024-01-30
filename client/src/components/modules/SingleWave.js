import React from "react";

/**
 * Wave is a component that renders creator and content of a story
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

const SingleWave = (props) => {
  return (
    <div>
      <p> Wave name: {props.waveId}</p>
      <p> Attack value: {props.attack} </p>
    </div>
  );
};

export default SingleWave;
