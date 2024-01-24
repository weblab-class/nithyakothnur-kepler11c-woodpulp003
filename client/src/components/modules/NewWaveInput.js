import React, { useState } from "react";

import { post } from "../../utilities";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} _id for the user
 * @param {({waveId, value}) => void} onSubmit: waveId of the wave
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

const NewWaveInput = (props) => {
  const [value, setValue] = useState("");
  const [waveName, setWaveName] = useState();
  const [testNumber, setTestNumber] = useState(3700);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(value);

    const updatedWaveName = document.getElementById("name").value;
    setWaveName(updatedWaveName);
    console.log("name is ", updatedWaveName);
    props.onSubmit(value, updatedWaveName);
  };

  const change = (e) => {
    let { id, value } = e.target;
    setValue(value);
    setTestNumber(value);
    console.log("Value received is ", value, "Id is", id);
  };

  const update = (e) => {
    let { id, waveName } = e.target;
    setWaveName(waveName);
    console.log(waveName);
  };

  return (
    <>
      <div>Name your wave and set the attack value.</div>
      <input type="text" placeholder="Enter Name" id="name" onChange={update}></input>
      <input value={testNumber} type="range" onChange={change} id="attack" max="10000" />
      <button type="submit" value="Submit" onClick={handleSubmit}>
        {" "}
        Submit
      </button>
    </>
  );
};

const NewWave = (props) => {
  const addWave = (value, waveName) => {
    const body = { waveId: waveName, attack: value };
    post("/api/wave", body).then((wave) => {
      props.addNewWave(wave);
    });
  };

  return <NewWaveInput onSubmit={addWave} />;
};

export { NewWave };
