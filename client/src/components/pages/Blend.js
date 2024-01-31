import React from "react";
import Osc1 from "./controls/OscControl.js";
import Filter from "./controls/FilterControls.js";
import Keyboard from "./controls/KeyboardControls.js";
import ADSR from "./controls/ADSR.js";
import "./Blend.css";

function Blend() {
  return (
    <div class="flex flex-row items-center justify-between">
      {/* <h1>Basic Oscillator Maker</h1> */}
      <div class="flex flex-col items-center justify-between">
        <Osc1 />
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <ADSR />
          <Filter />
        </div>
        <div class="px-40 py-10 absolute bottom-0 center-0">
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default Blend;
