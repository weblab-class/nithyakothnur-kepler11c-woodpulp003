import React, { useState } from "react";

import "../../utilities.css";
import "../pages/Learn.css";
import EnvelopeGraph from "../modules/ADSR";

const Learn = () => {
  const [attack, setAttack] = useState(0.5);
  const changeAttack = (event) => {
    console.log(event);
    setAttack(event.target.value);
  };

  const [decay, setDecay] = useState(0.5);
  const changeDecay = () => {
    setDecay(decay + 0.1);
  };

  const [sustain, setSustain] = useState(0.3);
  const changeSustain = () => {
    setSustain(sustain + 0.1);
  };

  const [release, setRelease] = useState(0.8);
  const changeRelease = () => {
    setRelease(release + 0.1);
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
              <li id="blend_mark" class>
                <a href="#blend">Learning to use blend: </a>
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
          </div>
          <div className="content3" id="blend">
            <p>
              In this section we learn how to use the main functionality of our website The blend
              feature
              <EnvelopeGraph a={attack} d={decay} s={sustain} r={release} />
              <div>
                <h3>attack</h3>
                <input type="range" step="0.1" onChange={changeAttack} min="0" max="1" />
                <h3>decay</h3>
                <input type="range" step="0.1" onChange={changeDecay} min="0" max="1" />
                <h3>sustain</h3>
                <input type="range" step="0.1" onChange={changeSustain} min="0" max="1" />
                <h3>release</h3>
                <input type="range" step="0.1" onChange={changeRelease} min="0" max="1" />
              </div>
            </p>
          </div>
          <div className="content4" id=""></div>
        </div>
      </div>
    </>
  );
};

export default Learn;
