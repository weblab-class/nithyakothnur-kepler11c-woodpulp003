import React, { useState, useEffect } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import NavBar from "./modules/NavBar.js";
import Home from "./pages/Home.js";
import Learn from "./pages/Learn.js";
import Blend from "./pages/Blend.js";
import Play from "./pages/Play.js";
import Profile from "./pages/Profile.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [decodedName, setDecodedName] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setDecodedName(user.name);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    setDecodedName(decodedCredential.name);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (

    <BrowserRouter>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
          Route path="/" element={<Home />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        {/* <Route path="/blend" element={<Blend />} /> */}
        {/* <Route path="/play" element={<Play />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <div>
        <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/learn" element={<Learn />} /> */}
      {/* <Route path="/blend" element={<Blend path="/blend" />}></Route>
          <Route path="/play" element={<Play path="/play" />}></Route>
          <Route path="/profile" element={<Profile path="/profile" />}></Route> */}

      {/* <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* <Routes>
          <Home path="/" />
          <Learn path="/learn" />
          <Blend path="/blend" />
          <Play path="/play" />
          <Profile path="/profile/:userId" />
          <NotFound default />
        </Routes> */}
      {/* // </div> */}

    </BrowserRouter>
  );
};

export default App;
