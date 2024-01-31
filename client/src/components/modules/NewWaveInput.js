import React, { useState } from "react";

import { post } from "../../utilities";

const WaveModel = require(WaveModel)

//const WaveModel = require("../../../../../nithyakothnur-kepler11c-woodpulp003/server/models/wave.js");

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} _id for the user
 * @param {waveId} waveId for what the user typed
 * @param {string} userId
 * @param {string} wave type of wave
 * @param {number} attack
 * @param {number} decay
 * @param {number} sustain
 * @param {number} release
 * @param {number} filterCutoff
 * @param {number} filterQ
 * @param {number} filterType
 */

const NewWaveInput = (props) => {
  // const [attack, setAttack] = useState("");
  const [waveId, setWaveId] = useState();
  // const [testNumber, setTestNumber] = useState(3700);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setAttack(attack);



    const updateWaveId = document.getElementById("name").value;
    setWaveId(updateWaveId);
    console.log("name is ", updateWaveId);

    console.log(props.userId);
    props.userId
      ? props.onSubmit(updateWaveId)
      : console.log("user should login before submitting"); //Add here what to do if the user is not logged in
  };

  const change = (e) => {
    let { id, value } = e.target;
    setAttack(value);
    setTestNumber(value);
    //console.log("Value received is ", value, "Id is", id);
  };

  const update = (e) => {
    let { id, waveId } = e.target;
    setWaveId(waveId);
    console.log(waveId);
  };

  return (
    <>
      <div>
        {" "}
        <p>Name Your Wave: </p>
        <input type="text" placeholder="Enter Wave Name" id="name" onChange={update}></input>
        {/* <input value={testNumber} type="range" onChange={change} id="attack" max="10000" /> */}
        <button type="submit" value="Submit" onClick={handleSubmit}>
          {" "}
          Submit
        </button>
      </div>
      {/* {console.log(WaveModel.totalSize())} */}
      {/* {console.log("newwaveinput -> ", props.userId)} */}
    </>
  );
};

const NewWave = (props) => {
  const addWave = (waveId) => {
    const body = {
      userId: props.userId,
      waveId: waveId,
      wave: props.wave,
      attack: props.attack,
      decay: props.decay,
      sustain: props.sustain,
      release: props.release,
      filterCutoff: props.filterCutoff,
      filterQ: props.filterQ,
      filterType: props.filterType,
    };
    console.log("trying to post wave, userId is: ", props.userId);
    post("/api/wave", body).then((wave) => {
      props.addNewWave(wave);
    });
  };

  return <NewWaveInput onSubmit={addWave} userId={props.userId} />;
};

export { NewWave };
