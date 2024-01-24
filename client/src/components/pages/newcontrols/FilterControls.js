import React from "react";

const FilterControls = ({ settings, change, changeType }) => {
  let { frequency, type } = settings;
  return (
    <div className="control">
      <h2>Filter Controls</h2>
      <div>
        <h3>frequency</h3>
        <input value={frequency} type="range" onChange={change} id="frequency" max="10000" />
      </div>
      <div>
        <h3>type</h3>
        <button onClick={changeType} id="lowpass" className={`${type === "lowpass" && "active"}`}>
          lowpass
        </button>
        <button onClick={changeType} id="highpass" className={`${type === "highpass" && "active"}`}>
          highpass
        </button>
        <button onClick={changeType} id="notch" className={`${type === "notch" && "active"}`}>
          notch
        </button>
      </div>
    </div>
  );
};
export default FilterControls;
