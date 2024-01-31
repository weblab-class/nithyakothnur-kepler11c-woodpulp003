import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import "../pages/Home.css";
//mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4

const Home = (props) => {
  return (
    <body class="bg-white p-8">
      <div class="sm:align-center sm:flex sm:flex-col">
        <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Welcome to Sound Mixer</h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">
          The place where your inner soul finds its musical note
        </p>
      </div>
      <div class="text-1xl font-extrabold text-gray-500">Welcome to Sound Mixer!</div>
      <div class="flex flex-row">
        <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
          <img src="./images/happycow.jpeg" />
          <div class="p-6">
            <Link to="/learn" className="NavBar-link main-title">
              Learn
            </Link>
          </div>
          <p class="text-1xl font-extrabold text-gray-500">
            Navigate the wonders behind the science of waves and explore how use the features on
            this website. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."{" "}
          </p>
          <p class="text-1xl font-extrabold text-gray-500">
            Mix together different types of waveforms to create your own sounds. "Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
          <img src="./images/happycow.jpeg" />
          <div class="p-6">
            <Link to="/blend" className="NavBar-link main-title">
              Blend
            </Link>
          </div>
          <p class="text-1xl font-extrabold text-gray-500">
            Mix together different types of waveforms to create your own sounds. "Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>{" "}
          <p class="text-1xl font-extrabold text-gray-500">
            Mix together different types of waveforms to create your own sounds. "Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </body>
  );
};

export default Home;
