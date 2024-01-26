import React, { useState } from "react";

// import "../../utilities.css";
// import "../pages/Learn.css";
import EnvelopeGraph from "../modules/ADSR";
import Sine from "../modules/Sine";
import Fourier from "../modules/Fourier";

const Learn = () => {
  const [attack, setAttack] = useState(0.5);
  const changeAttack = (event) => {
    setAttack(Number(event.target.value));
  };

  const [decay, setDecay] = useState(0.5);
  const changeDecay = (event) => {
    setDecay(Number(event.target.value));
  };

  const [sustain, setSustain] = useState(0.3);
  const changeSustain = (event) => {
    setSustain(Number(event.target.value));
  };

  const [release, setRelease] = useState(0.8);
  const changeRelease = (event) => {
    setRelease(Number(event.target.value));
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
              <li id="attack_mark">
                <a href="#attack">Using Attack: </a>
              </li>
              <li id="decay_mark">
                <a href="#decay">Using Decay: </a>
              </li>
              <li id="sustain_mark">
                <a href="#sustain">Using sustain: </a>
              </li>
              <li id="release_mark">
                <a href="#attack">Using release: </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="mainContent">
          <div className="content1" id="introduction_to_fourier_series">
            <p>The fourier series introduced in ... by ...</p>
            <Sine />
            <Fourier />
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
          <div className="content4" id="attack">
            <p>This is the attack section.</p>
          </div>
          <div className="content5" id="decay">
            <p>This is the decay section.</p>
          </div>
          <div className="content6" id="sustain">
            <p>This is the sustain section.</p>
          </div>
          <div className="content7" id="release">
            <p>This is the release section.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
