import React from "react";
import Osc1 from "./controls/OscControl.js";
import Filter from "./controls/FilterControls.js";
import Keyboard from "./controls/KeyboardControls.js";
import ADSR from "./controls/ADSR.js";
import "./Blend.css";

function Blend() {
  return (
    <div className="body">
      <h1>Basic Oscillator Maker</h1>
      <Osc1 />
      <ADSR />
      <Filter />
      <Keyboard />
    </div>
  );
}

export default Blend;