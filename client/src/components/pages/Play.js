import React, { useState, useEffect } from "react";

import { NewWave } from "../modules/SaveWaves.js";

import { get } from "../../utilities.js";

const Play = () => {
  const [waves, setWaves] = useState([]);

  useEffect(() => {
    get("/api/waves").then((waveObj) => {
      setWaves(waveObj);
    });
  }, []);

  //   const addNewWave = (waveObj) => {
  //       setWaves([waveObj]);
  //   }


  let wavesList = null;

  const hasWaves = waves.length !== 0;
  if (hasWaves) {
    wavesList = waves.map((waveObj) => (

        {waveObj._id}
        {waveObj.test}

        waveObj.

      <Card
        key={`Card_${storyObj._id}`}
        _id={storyObj._id}
        creator_name={storyObj.creator_name}
        content={storyObj.content}
      />
    ));



  return (
    <>
      console.log("this is play")
      {wavesList}
    </>
  );
};

export default Play;
