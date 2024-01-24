import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App.js";
import Blend from "./components/pages/Blend.js";
import Store from "./components/pages/context/Store.js";
import NewBlend from "./components/pages/NewBlend.js";

// renders React Component "Root" into the DOM element with ID "root"
const container = document.getElementById("root");
const root = createRoot(container);


root.render(<App />);

// allows for live updating
module.hot.accept();

// removed app before blend
