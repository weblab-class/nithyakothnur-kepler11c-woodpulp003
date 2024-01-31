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
    console.log("you've clicked the button");
    console.log(props);

    let value = 1.5;
    updateState({ type: "CHANGE_ADSR", payload: { attack, value } });
    console.log("changed attack value");
    console.log(props);



  };

  return (
    <div className="card_style">
      <p>{props.waveId}</p>
      <button type="submit" value="Submit" onClick={handleSubmit}>
        {" "}
        Add Wave
      </button>
    </div>
  );
};

export default SingleWave;
