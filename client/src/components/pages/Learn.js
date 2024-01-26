import React, { useState } from "react";

import "../../utilities.css";
import "../pages/Learn.css";
import EnvelopeGraph from "../modules/ADSR";

const Learn = () => {
  const [attack, setAttack] = useState(0.5);
  const change = () => {
    setAttack(attack + 0.1);
  };

  return (
    <>
      <div className="learnCard">
        <aside className="sidebar">
          <div className="content">
            <ul id="sidebar">
              <li id="head_mark">
                <a href="#introdution_to_fourier_series">Introduction to the Fourier Series: </a>
              </li>
              <li id="using_the_fourier_series_mark" class>
                <a href="#using_the_fourier_series">Using the fourier series: </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="mainContent">
          <div className="content1" id="introduction_to_fourier_series">
            <p>The fourier series introduced in ... by ...</p>
            {/* const ctx = document.getElementById("canvas").getContext("2d"); plotSine(cts); */}
            {/* <SineGraph /> */}
          </div>
          <div className="content2" id="using_the_fourier_series">
            <p>
              We are going to use the fourier series to break down a periodic function represented
              as a function into sine functions with period 2pi.
            </p>
            <EnvelopeGraph a={attack} d={0.5} s={0.3} r={0.8} />
            <div>
              <h3>attack</h3>
              <input type="range" step="0.1" onChange={change} min="0" max="1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
