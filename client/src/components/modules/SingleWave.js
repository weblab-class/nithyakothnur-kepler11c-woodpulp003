import React, { useState, useEffect, useContext } from "react";
import "./SingleWave.css";
// import { CTX } from "./context/Store.js";
import { CTX } from "../pages/context/Store";

import { get } from "../../utilities.js";

/**
 * Wave is a component that renders creator and content of a story
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
 * @param {number} filterCutoff
 * @param {number} filterQ
 * @param {number} filterType
 */

const SingleWave = (props) => {
  const [appState, updateState] = useContext(CTX);

  const handleSubmit = (event) => {
    let id = props.wave;
    updateState({ type: "CHANGE_OSC1_TYPE", payload: { id } });
    id = "attack";
    let value = props.attack;
    updateState({ type: "CHANGE_ADSR", payload: { id, value } });
    id = "decay";
    value = props.decay;
    updateState({ type: "CHANGE_ADSR", payload: { id, value } });
    id = "sustain";
    value = props.sustain;
    updateState({ type: "CHANGE_ADSR", payload: { id, value } });
    id = "release";
    value = props.release;
    updateState({ type: "CHANGE_ADSR", payload: { id, value } });
    id = props.filterType;
    updateState({ type: "CHANGE_FILTER_TYPE", payload: { id } });
    id = "frequency";
    value = props.filterCutoff;
    updateState({ type: "CHANGE_FILTER", payload: { id, value } });
    id = "Q";
    value = props.filterQ;
    updateState({ type: "CHANGE_FILTER", payload: { id, value } });
  };
  return (
    <div className="card_style">
      <p>{props.waveId}</p>
      <button class="border m-2 p-2" type="submit" value="Submit" onClick={handleSubmit}>
        {" "}
        Add Wave
      </button>
    </div>
  );
};

export default SingleWave;
