import React, { useState } from "react";

// import "../../utilities.css";
// import "../pages/Learn.css";
import EnvelopeGraph from "../modules/ADSR";
//import Sine from "../modules/Sine";
//import Fourier from "../modules/Fourier";

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
        <aside class="sticky top-0 self-start">
          <div class="px-5">
            <ul id="sidebar" class="flex-1">
              <li id="head_mark">
                <a
                  href="#sound_as_waves"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  1. Sound as Waves:{" "}
                </a>
              </li>
              <li id="what_is_an_envelope_mark" class>
                <a
                  href="#what_is_an_envelope"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  2. What is an Envelope?:{" "}
                </a>
              </li>
              <li id="filter_controls_mark" class>
                <a
                  href="#filter_controls"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  3. Fliter Controls:{" "}
                </a>
              </li>
              <li id="music_of_it_all_mark">
                <a
                  href="#music_of_it_all"
                  class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  4. Music of it All:{" "}
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div class="flex-1 px-4">
          <div id="sound_as_waves" class="whitespace-pre-line text-center">
            <h1 class="text-2xl">What are Soundwaves?</h1>
            <hr></hr>
            <p>
              Have you ever wondered what sound really is? How is it that we can hear the difference
              between a piano and a guitar? And why do some notes sound shriller than others? Why do
              some notes sound good together, and other combinations make your ears bleed?
            </p>
            <p class="m-4"></p>
            <p>
              The answers to all these questions can be understood once you understand sound as
              waves, and model their characteristics in frequency and amplitude spaces.
              Fundamentally, each sound is a vibration, just air moving really fast periodically.
            </p>
            <p class="m-4"></p>

            <p>
              Let's first understand how the time period, amplitude and shape of the wave dictates
              how it sounds to us.
            </p>
            <p class="m-4"></p>

            <h3 class="text-xl">Time period</h3>
            <p>
              Here's the deal: the faster the air vibrates, the shriller it sounds. Increasing the
              frequency or decreasing the time period makes the waves sound shriller!
            </p>
            <p class="m-4"></p>

            <div class="flex flex-row gap-4 justify-center">
              <button
                id="play440Hz"
                class=" p-1 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={playfreq}
              >
                Play 440Hz
              </button>
              <button
                id="kill440Hz"
                class=" p-1 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={killfreq}
              >
                Stop 440Hz
              </button>
              <button
                id="play880Hz"
                class=" p-1 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={playfreq}
              >
                Play 880Hz
              </button>
              <button
                id="kill880Hz"
                class=" p-1 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={killfreq}
              >
                Stop 880Hz
              </button>
            </div>
            <p class="m-4"></p>

            <h3 class="text-xl">Amplitude</h3>
            <p>
              The amplitude of the wave represents how much the pressure varies in each oscillation.
              The loudness of the sound is directly related to the amplitude of the pressure waves.
            </p>
            <p class="m-4"></p>

            <h3 class="text-xl">Wave Shape</h3>
            <p>
              The wave shape affects the quality of the sound: it is what differentiates a piano
              from a guitar, or your voice from mine! There are four basic wave shapes that are
              commonly used in sound synthesis: sine, square, triangle and sawtooth. Let's hear how
              each of these sound!
            </p>
            <p class="m-4"></p>

            <button
              id="playsine"
              class=" p-1 ml-2 mr-2 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={playfreq}
            >
              Play Sine
            </button>
            <button
              id="killsine"
              class=" p-1 ml-2 mr-2 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={killfreq}
            >
              Stop Sine
            </button>
            <button
              id="playsquare"
              class=" p-1 ml-2 mr-2 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={playfreq}
            >
              Play Square
            </button>
            <button
              id="killsquare"
              class=" p-1 ml-2 mr-2 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={killfreq}
            >
              Stop Square
            </button>
            {/* <Sine /> */}
            {/* <Fourier /> */}
            {/* const ctx = document.getElementById("canvas").getContext("2d"); plotSine(cts); */}
            {/* <SineGraph /> */}
            <button
              id="playtriangle"
              class=" p-1 ml-2 mr-2 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={playfreq}
            >
              Play Triangle
            </button>
            <button
              id="killtriangle"
              class=" p-1 ml-2 mr-2 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={killfreq}
            >
              Stop Triangle
            </button>
            <button
              id="playsawtooth"
              class=" p-1 ml-2 mr-2 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={playfreq}
            >
              Play Sawtooth
            </button>
            <button
              id="killsawtooth"
              class=" p-1 ml-2 mr-2 border-2 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={killfreq}
            >
              Stop Sawtooth
            </button>
            <p class="m-4"></p>

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
            <p class="m-4"></p>

            {/* Include buttons for the four sound types */}

            {/* const ctx = document.getElementById("canvas").getContext("2d"); plotSine(cts); */}
            {/* <SineGraph /> */}
            <p>
              Now that we understand how waves represent sound waves, we can evolve them over time
              or modify them to our liking to create more interesting sounds! One of the most
              powerful ways to make sounds dynamic is to introduce an ADSR envelope, more on that in
              the next section.
            </p>
            <p class="m-4"></p>
          </div>
          <div id="what_is_an_envelope" class="whitespace-pre-line text-center">
            <h1 class="text-2xl">What is an Envelope?</h1>
            <hr></hr>
            <p>In this section, we will understand what an envelope is, and what ADSR means.</p>
            <p class="m-4"></p>
            <h3 class="text-xl">Changing amplitude and the enveleope over time</h3>
            <p>
              Most implementations of an electronic synth change the gain, or volume, of the sound
              over time to give the instrument some motion. The motion can be graphed with respect
              to time to give an envelope of the volume. This envelope is described by the four
              parameters Attack, Decay, Sustain and Release; or ADSR.
            </p>
            <p class="m-4"></p>
            <h3 class="text-xl">Attack</h3>
            The attack is the time that the sound takes to reach its maximum amplitude from the
            moment of triggering. A smaller attack sounds abrupt, while a longer attack makes the
            sound swell up for a longer time.
            <h3 class="text-xl">Decay</h3>
            <p class="m-4"></p>
            <p>
              Decay is the time that the sound takes after reaching the maximum amplitude to drop
              down to its sustained volume: the volume that plays while you still hold down the key.
              A short decay time means the sound immediately drops in volume after the attack time
              is over.
            </p>
            <p class="m-4"></p>
            <h3 class="text-xl">Sustain</h3>
            <p>
              This is the ratio of the maximum volume reached by the sound and that which is heard
              while you hold down the key. Its a value between 0 and 1; a value closer to 1 means
              the shift between the attack sound and the sustained sound is very smooth.
            </p>
            <p class="m-4"></p>
            <h3 class="text-xl">Release</h3>
            <p>
              This is the time for which the sound fades out after you release the key. A long decay
              time means the sound will be heard for longer, provided you held the note long enough
              to clear the attack time. Imagine playing a lot of these notes at the same time, they
              keep playing together, decaying after the decay time!
            </p>
            <p class="m-4"></p>
            <p>
              <p>Now try your hand at making ADSR changes and watch the graph evolve.</p>
              <p class="w-1/4 items-center">
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
              <p class="m-4"></p>
            </p>
          </div>
          <div id="filter_controls" class="text-center">
            {/* <h1 class="text-2xl">Filter Controls</h1>
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
            </p> */}
            <h1 class="text-2xl">Filter Controls</h1>
            <hr></hr>
            <p>
              We have seen how we can make the sound dynamic over time. It is time to understand how
              we can make the sound dynamic over the frequency range. A filter, or equalizer, is a
              device that helps us selectively increase the volumes of certain frequency values and
              decrease others. For example, you could bump up the low-end frequencies and cut out
              the high-end frequencies using something called a low-pass filter. There are many more
              types of filters available, some of which we have included in the Blend section. The
              filter is defined by the frequency-cutoff, the quality Q and filter type amongst other
              parameters.
            </p>
            <p class="m-4"></p>

            <h3 class="text-xl">Frequency-Cutoff</h3>
            <p>
              This defines the lower (or upper) limit of the frequency beyond which you cannot hear
              the sound. For example, for a low-pass filter, if the frequency-cutoff is at 400Hz, no
              sounds below a frequency of 400Hz will be audible.
            </p>
            <p class="m-4"></p>

            <h3 class="text-xl">Quality, Q</h3>
            <p>
              This defines how sharply the filter applies and how specific the filter behavior is to
              the value of the frequency-cutoff. For example, in a notch type filter, a higher value
              of Q means that only a very specific range of frequencies around the frequency-cutoff
              are silenced.
            </p>
            <p class="m-4"></p>

            <h3 class="text-xl">Filter Type</h3>
            <p>
              This produces the starkest difference amongst all other parameters as it completely
              defines how we bump up or silence the frequencies. A low-pass filter silences the
              higher frequencies, and thus may remove extra harmonics for a square wave. Try this
              out in Blend to see for yourself how a square wave sounds more and more like a sine
              wave when you decrease the frequency-cutoff for a low-pass filter.
            </p>
            <p class="m-4"></p>
          </div>
          <div id="music_of_it_all" class="text-center">
            <h1 class="text-2xl">Music of it All:</h1>
            <hr></hr>
            <p>
              So, what does sound good, and what is music and what isn't? After seeing the role the
              harmonics play in defining the kind of instrument we perceive our synth to be, you
              might wonder why only double or triple of the fundamental frequency are involved in
              the Fourier decomposition of most sound waves. This is because the human brain seems
              to prefer simple frequency ratios. For example, an octave represents two frequencies
              that are seperated by a ratio of 2, while a perfect fifth (like C to G on the piano)
              represents a ratio of 3:2.
            </p>
            <p class="m-4"></p>

            <p>
              The overall picture of sound design is thus this. We start with a note with some
              fundamental frequency. We add up the fundamental sine wave with this fundamental
              frequency, along with some higher harmonics of the fundamental frequency. These higher
              frequencies come in varying proportions, and thus define the kind of sound we hear. We
              next modulate how the volume of the synth should vary with time to give it more
              motion. We can also go back to the frequency picture and edit out some higher
              harmonics, or kill off some of the middle frequencies to create a new sound. Or you
              could use the filter to create variability over the keyboard: since the fundamental
              frequency also changes with each note, the behavior of the filter on each note is
              different. A high-pass filter would silence a higher note more than it does on a lower
              note. Finally, we have a sound to ourselves, and we can combine together multiple
              versions of the fundamental frequency to create music.
            </p>
            <p class="m-4"></p>

            <p>
              This website is a mere introduction to the world of sound design and synthesis. There
              are many more effects that we have forgone; you can add reverb by echoing the original
              sound, unison by detuning the fundamental. There is much more to learn, and hopefully
              we have excited you to continue on this journey!
            </p>
            <p class="m-12"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
