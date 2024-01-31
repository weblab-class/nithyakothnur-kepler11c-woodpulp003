import React, { useState } from "react";

// import "../../utilities.css";
// import "../pages/Learn.css";
import EnvelopeGraph from "../modules/ADSR";
import Sine from "../modules/Sine";
import Fourier from "../modules/Fourier";

let actx = new AudioContext();
let nodes = [];
const Learn = () => {
  const [attack, setAttack] = useState(0.5);
  const change = () => {
    setAttack(attack + 0.1);
  };

  const playfreq = (e) => {
    let { id } = e.target;
    if (id === "play440Hz") {
      let oscfreq = actx.createOscillator();
      oscfreq.frequency.value = 440;
      oscfreq.connect(actx.destination);
      oscfreq.start();
      console.log(oscfreq);
      nodes.push(oscfreq);
    }
    if (id == "play880Hz") {
      let oscfreq = actx.createOscillator();
      oscfreq.frequency.value = 880;
      oscfreq.connect(actx.destination);
      oscfreq.start();
      console.log(oscfreq);
      nodes.push(oscfreq);
    }

    if (id == "playsine") {
      let oscfreq = actx.createOscillator();
      oscfreq.frequency.value = 440;
      oscfreq.type = "sine";
      oscfreq.connect(actx.destination);
      oscfreq.start();
      console.log(oscfreq);
      nodes.push(oscfreq);
    }

    if (id == "playsquare") {
      let oscfreq = actx.createOscillator();
      oscfreq.frequency.value = 440;
      oscfreq.type = "square";
      oscfreq.connect(actx.destination);
      oscfreq.start();
      console.log(oscfreq);
      nodes.push(oscfreq);
    }

    if (id == "playtriangle") {
      let oscfreq = actx.createOscillator();
      oscfreq.frequency.value = 440;
      oscfreq.type = "triangle";
      oscfreq.connect(actx.destination);
      oscfreq.start();
      console.log(oscfreq);
      nodes.push(oscfreq);
    }

    if (id == "playsawtooth") {
      let oscfreq = actx.createOscillator();
      oscfreq.frequency.value = 440;
      oscfreq.type = "sawtooth";
      oscfreq.connect(actx.destination);
      oscfreq.start();
      console.log(oscfreq);
      nodes.push(oscfreq);
    }
  };
  const killfreq = (e) => {
    let { id } = e.target;
    if (id === "kill440Hz") {
      let newNodes = [];
      nodes.forEach((node) => {
        if (Math.round(node.frequency.value) === Math.round(440)) {
          node.stop();
        } else {
          newNodes.push(node);
        }
      });
      nodes = newNodes;
    }
    if (id == "kill880Hz") {
      let newNodes = [];
      nodes.forEach((node) => {
        if (Math.round(node.frequency.value) === Math.round(880)) {
          node.stop();
        } else {
          newNodes.push(node);
        }
      });
      nodes = newNodes;
    }
    if (id == "killsine") {
      let newNodes = [];
      nodes.forEach((node) => {
        if (node.type === "sine") {
          node.stop();
        } else {
          newNodes.push(node);
        }
      });
      nodes = newNodes;
    }
    if (id == "killsquare") {
      let newNodes = [];
      nodes.forEach((node) => {
        if (node.type === "square") {
          node.stop();
        } else {
          newNodes.push(node);
        }
      });
      nodes = newNodes;
    }
    if (id == "killtriangle") {
      let newNodes = [];
      nodes.forEach((node) => {
        if (node.type === "triangle") {
          node.stop();
        } else {
          newNodes.push(node);
        }
      });
      nodes = newNodes;
    }
    if (id == "killsawtooth") {
      let newNodes = [];
      nodes.forEach((node) => {
        if (node.type === "sawtooth") {
          node.stop();
        } else {
          newNodes.push(node);
        }
      });
      nodes = newNodes;
    }
  };

  // const [attack, setAttack] = useState(0.5);
  //come back there might be a bug
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
      <div class="flex flex-row">
        <aside>
          <div class="px-5">
            <ul id="sidebar" class="flex-1">
              <li id="head_mark">
                <a
                  href="#introdution_to_fourier_series"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  1. Introduction to the Fourier Series:{" "}
                </a>
              </li>
              <li id="using_the_fourier_series_mark" class>
                <a
                  href="#using_the_fourier_series"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  2. Using the fourier series:{" "}
                </a>
              </li>
              <li id="blend_mark" class>
                <a
                  href="#blend"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  3. Learning to use blend:{" "}
                </a>
              </li>
              <li id="attack_mark">
                <a
                  href="#attack"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  4. Using Attack:{" "}
                </a>
              </li>
              <li id="decay_mark">
                <a
                  href="#decay"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  5. Using Decay:{" "}
                </a>
              </li>
              <li id="sustain_mark">
                <a
                  href="#sustain"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  6. Using sustain:{" "}
                </a>
              </li>
              <li id="release_mark">
                <a
                  href="#attack"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  7. Using release:{" "}
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div class="flex-1">
          <div id="introduction_to_fourier_series">
            <h1 class="text-2xl">Introduction to the fourier series</h1>
            <hr></hr>
            <p>
              Have you ever wondered what sound really is? How is it that we can hear the difference
              between a piano and a guitar? And why do some notes sound shriller than others? Why do
              some notes sound good together, and other combinations make your ears bleed?
            </p>
            <p>
              The answers to all these questions can be understood once you understand sound as
              waves, and model their characteristics in frequency and amplitude spaces.
              Fundamentally, each sound is a vibration, just air moving really fast periodically.
            </p>
            <p>
              Let's first understand how the time period, amplitude and shape of the wave dictates
              how it sounds to us.
            </p>
            <h3>Time period</h3>
            <p>
              Here's the deal: the faster the air vibrates, the shriller it sounds. Increasing the
              frequency or decreasing the time period makes the waves sound shriller!
            </p>
            <button id="play440Hz" onClick={playfreq}>
              Play 440Hz
            </button>
            <button id="kill440Hz" onClick={killfreq}>
              Stop 440Hz
            </button>
            <button id="play880Hz" onClick={playfreq}>
              Play 880Hz
            </button>
            <button id="kill880Hz" onClick={killfreq}>
              Stop 880Hz
            </button>
            <h3>Amplitude</h3>
            <p>
              The amplitude of the wave represents how much the pressure varies in each oscillation.
              The loudness of the sound is directly related to the amplitude of the pressure waves.
            </p>
            <h3>Wave Shape</h3>
            <p>
              The wave shape affects the quality of the sound: it is what differentiates a piano
              from a guitar, or your voice from mine! There are four basic wave shapes that are
              commonly used in sound synthesis: sine, square, triangle and sawtooth. Let's hear how
              each of these sound!
            </p>
            <button id="playsine" onClick={playfreq}>
              Play Sine
            </button>
            <button id="killsine" onClick={killfreq}>
              Stop Sine
            </button>
            <button id="playsquare" onClick={playfreq}>
              Play Square
            </button>
            <button id="killsquare" onClick={killfreq}>
              Stop Square
            </button>
            {/* <Sine /> */}
            {/* <Fourier /> */}
            {/* const ctx = document.getElementById("canvas").getContext("2d"); plotSine(cts); */}
            {/* <SineGraph /> */}
            <button id="playtriangle" onClick={playfreq}>
              Play Triangle
            </button>
            <button id="killtriangle" onClick={killfreq}>
              Stop Triangle
            </button>
            <button id="playsawtooth" onClick={playfreq}>
              Play Sawtooth
            </button>
            <button id="killsawtooth" onClick={killfreq}>
              Stop Sawtooth
            </button>
            <p>
              There is a lot that can be said about these wave shapes, but what one needs to
              understand is that ALL waves are a sum of a bunch of sine waves. This is the key idea
              behind a Fourier transform: it breaks down any given sound shape into its constituent
              sine waves. So, a square wave is a sum of many sine waves; infinitely many of them. A
              square wave of frequency 440Hz is actually a combination of sine waves of frequency
              440Hz, 880Hz, and other higher multiples of the fundamental frequency of the square
              wave. The same goes for triangle waves, sawtooth waves, guitar waves, piano waves and
              you-waves! The relative amplitude of these higher harmonics (or multiples of the
              fundamental) is what defines the wave shape. A sine wave is entirely made of the
              fundamental frequency, but a square wave has one part of its fundamental, a third as
              much of three times the frequency as the fundamental, a fifth as much of five times
              the frequency of the fundamental and so on. The existence of these multiples of the
              fundamental will be crucial later.
            </p>
            {/* Include buttons for the four sound types */}

            {/* const ctx = document.getElementById("canvas").getContext("2d"); plotSine(cts); */}
            {/* <SineGraph /> */}
            <p>
              Now that we understand how waves represent sound waves, we can evolve them over time
              or modify them to our liking to create more interesting sounds! One of the most
              powerful ways to make sounds dynamic is to introduce an ADSR envelope, more on that in
              the next section.
            </p>
          </div>
          <div id="using_the_fourier_series">
            <h1 class="text-2xl">Introduction to the fourier series</h1>
            <hr></hr>
            <p>In this section, we will understand what an envelope is, and what ADSR means.</p>
            <h3>Changing amplitude over time and the envelope</h3>
            <p>
              Most implementations of an electronic synth change the gain, or volume, of the sound
              over time to give the instrument some motion. The motion can be graphed with respect
              to time to give an envelope of the volume. This envelope is described by the four
              parameters Attack, Decay, Sustain and Release; or ADSR.
            </p>
            <h3>Attack</h3>
            The attack is the time that the sound takes to reach its maximum amplitude from the
            moment of triggering. A smaller attack sounds abrupt, while a longer attack makes the
            sound swell up for a longer time.
            <h3>Decay</h3>
            <p>
              Decay is the time that the sound takes after reaching the maximum amplitude to drop
              down to its sustained volume: the volume that plays while you still hold down the key.
              A short decay time means the sound immediately drops in volume after the attack time
              is over.
            </p>
            <h3>Sustain</h3>
            <p>
              This is the ratio of the maximum volume reached by the sound and that which is heard
              while you hold down the key. Its a value between 0 and 1; a value closer to 1 means
              the shift between the attack sound and the sustained sound is very smooth.
            </p>
            <h3>Release</h3>
            <p>
              This is the time for which the sound fades out after you release the key. A long decay
              time means the sound will be heard for longer, provided you held the note long enough
              to clear the attack time. Imagine playing a lot of these notes at the same time, they
              keep playing together, decaying after the decay time!
            </p>
          </div>
          <div id="blend">
            <h1 class="text-2xl">Introduction to the fourier series</h1>
            <hr></hr>
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
          <div id="attack">
            <h1 class="text-2xl">Introduction to the fourier series</h1>
            <hr></hr>
            <p>In this section, we will understand what an envelope is, and what ADSR means.</p>
            <h3>Changing amplitude over time and the envelope</h3>
            <p>
              Most implementations of an electronic synth change the gain, or volume, of the sound
              over time to give the instrument some motion. The motion can be graphed with respect
              to time to give an envelope of the volume. This envelope is described by the four
              parameters Attack, Decay, Sustain and Release; or ADSR.
            </p>
            <h3>Attack</h3>
            The attack is the time that the sound takes to reach its maximum amplitude from the
            moment of triggering. A smaller attack sounds abrupt, while a longer attack makes the
            sound swell up for a longer time.
            <h3>Decay</h3>
            <p>
              Decay is the time that the sound takes after reaching the maximum amplitude to drop
              down to its sustained volume: the volume that plays while you still hold down the key.
              A short decay time means the sound immediately drops in volume after the attack time
              is over.
            </p>
            <h3>Sustain</h3>
            <p>
              This is the ratio of the maximum volume reached by the sound and that which is heard
              while you hold down the key. Its a value between 0 and 1; a value closer to 1 means
              the shift between the attack sound and the sustained sound is very smooth.
            </p>
            <h3>Release</h3>
            <p>
              This is the time for which the sound fades out after you release the key. A long decay
              time means the sound will be heard for longer, provided you held the note long enough
              to clear the attack time. Imagine playing a lot of these notes at the same time, they
              keep playing together, decaying after the decay time!
            </p>
          </div>
          <div id="decay">
            <h1 class="text-2xl">Introduction to the fourier series</h1>
            <hr></hr>
            <p>This is the decay section.</p>
          </div>
          <div id="sustain">
            <h1 class="text-2xl">Introduction to the fourier series</h1>
            <hr></hr>
            <p>This is the sustain section.</p>
          </div>
          <div id="release">
            <h1 class="text-2xl">Introduction to the fourier series</h1>
            <hr></hr>
            <p>This is the release section.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
