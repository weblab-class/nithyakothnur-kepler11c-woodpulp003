import React, { useContext } from "react";
import { CTX } from "../context/Store";

const ADSR = () => {
  const [appState, updateState] = useContext(CTX);
  let { attack, decay, sustain, release } = appState.envelope;
  const change = (e) => {
    let { id, value } = e.target;
    updateState({ type: "CHANGE_ADSR", payload: { id, value } });
  };
  return (
    <div className="control">
      <h2>ADSR</h2>
      <div className="param">
        <h3>attack</h3>
        <div class="px-2">
          <input value={attack} type="range" id="attack" onChange={change} max="3" step="0.02" />
        </div>
      </div>
      <div className="param">
        <h3>decay</h3>
        <input value={decay} type="range" id="decay" onChange={change} max="1" step="0.01" />
      </div>
      <div className="param">
        <h3>sustain</h3>
        <input value={sustain} type="range" id="sustain" onChange={change} max="1" step="0.01" />
      </div>
      <div className="param">
        <h3>release</h3>
        <input value={release} type="range" id="release" onChange={change} max="3" step="0.02" />
      </div>
    </div>
  );
};

export default ADSR;
