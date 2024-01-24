import React, { useState } from "react";

import "../../utilities.css";
import "../pages/Learn.css";
import EnvelopeGraph from "../modules/ADSR";

const Learn = () => {
  const [attack, setAttack] = useState(0.5);
  const change = (e) => {
    setAttack(e.target.value);
  };
  const [value, setValue] = useState(0.5);

  const handleInputChange = (event) => {
    setValue(event.target.value);
    // setAttack(event.target.value);
    console.log(event.target.value);
    console.log(value);
  };

  return (
    <>
      <div className="learnCard">
        <aside className="sidebar">
          <div className="content">
            <ul id="sidebar">
              <li id="head_mark">
                <a href="#weekone">week 1: </a>
              </li>
              <li id="weektwo_mark" class>
                <a href="#weektwo">week 2: </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="mainContent">
          <div className="content1" id="weekone">
            <h1>hdiehdiehd</h1>
            <h2>dheidheidh</h2>
            <p>idheihdihedisadiniedjeidjeijdeidjeijdiej</p>
            <h1>hdiehdiehdih</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            <h1>dhie</h1>
            {/* const ctx = document.getElementById("canvas").getContext("2d"); plotSine(cts); */}
            {/* <SineGraph /> */}
          </div>
          <div className="content2" id="weektwo">
            <h1>diehdiehdei</h1>
            <h2>dheidheidheid</h2>
            <p>hdiheidheidhiehd</p>
            console.log(value)
            <EnvelopeGraph a={value} d={0.5} s={0.3} r={0.8} />
            <div>
              <h3>attack</h3>
              <input
                type="range"
                id="rangeInput"
                name="rangeInput"
                onChange={change}
                min="0"
                max="1"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <label htmlFor="rangeInput">Select a value:</label> */}
        <input
          type="range"
          id="rangeInput"
          name="rangeInput"
          min="0"
          max="1"
          step="0.1"
          value={value}
          onChange={handleInputChange}
        />
        <p>Selected value: {value}</p>
      </div>
    </>
  );
};

export default Learn;
