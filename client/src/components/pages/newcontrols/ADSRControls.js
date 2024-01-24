import React from "react";

const ADSRControls = ({ settings, change }) => {
  let { attack, decay, sustain, release } = settings;
  return (
    <div className="control">
      <h2>ADSR Controls</h2>
      <div>
        <h3>Attack</h3>
        <input value={attack} type="range" onChange={change} max="4" step="0.01" id="attack" />
      </div>
      <div>
        <h3>Decay</h3>
        <input value={decay} type="range" onChange={change} max="4" step="0.01" id="decay" />
      </div>
      <div>
        <h3>Sustain</h3>
        <input value={sustain} type="range" onChange={change} max="1" step="0.01" id="sustain" />
      </div>
      <div>
        <h3>Release</h3>
        <input value={release} type="range" onChange={change} max="4" step="0.01" id="release" />
      </div>
    </div>
  );
};

export default ADSRControls;
