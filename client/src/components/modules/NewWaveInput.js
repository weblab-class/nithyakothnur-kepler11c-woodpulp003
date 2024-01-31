import React, { useState } from "react";

import { post } from "../../utilities";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} _id for the user
 * @param {({waveId, value}) => void} onSubmit
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

    console.log(props.userId);
    props.userId
      ? props.onSubmit(value, updatedWaveName)
      : console.log("user should login before submitting"); //Add here what to do if the user is not logged in
  };

  const change = (e) => {
    let { id, value } = e.target;
    setValue(value);
    setTestNumber(value);
    //console.log("Value received is ", value, "Id is", id);
  };

  const update = (e) => {
    let { id, waveName } = e.target;
    setWaveName(waveName);
    console.log(waveName);
  };

  return (
    <>
      <div>
        {" "}
        <p>Name Your Wave: </p>
        <input type="text" placeholder="Enter Name" id="name" onChange={update}></input>
        <input value={testNumber} type="range" onChange={change} id="attack" max="10000" />
        <button type="submit" value="Submit" onClick={handleSubmit}>
          {" "}
          Submit
        </button>
      </div>
      {/* {console.log("newwaveinput -> ", props.userId)} */}
    </>
  );
};

const NewWave = (props) => {
  const addWave = (value, waveName) => {
    const body = { userId: props.userId, waveId: waveName, attack: value };
    console.log("trying to post wave, userId is: ", props.userId);
    post("/api/wave", body).then((wave) => {
      props.addNewWave(wave);
    });
  };

  return <NewWaveInput onSubmit={addWave} userId={props.userId} />;
};

export { NewWave };
