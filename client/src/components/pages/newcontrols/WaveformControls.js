import React from "react";

const WaveformControls = ({ type, changeType }) => {
  return (
    <div className="control">
      <button id="sine" onClick={changeType} className={`${type === "sine" && "active"}`}>
        sine
      </button>
      <button id="square" onClick={changeType} className={`${type === "square" && "active"}`}>
        square
      </button>
      <button id="triangle" onClick={changeType} className={`${type === "triangle" && "active"}`}>
        triangle
      </button>
      <button id="sawtooth" onClick={changeType} className={`${type === "sawtooth" && "active"}`}>
        sawtooth
      </button>
    </div>
  );
};

export default WaveformControls;
