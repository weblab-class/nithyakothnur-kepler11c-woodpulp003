import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4

const Home = (props) => {
  return (
    <body class="bg-#0b1440 p-8">
      <div class="sm:align-center sm:flex sm:flex-col">
        <h1 class="text-5xl font-extrabold text-white-900 sm:text-center">
          Welcome to Sound Mixer
        </h1>
        <p class="mt-4 text-xl text-white-500 sm:text-center mb-8">
          • • • ♪ where your inner soul finds its musical happiness ♪ • • •
        </p>
      </div>
      <div class="flex flex-row ">
        <div class="rounded-lg  shadow-sm items-center">
          <div class="flex justify-center items-center">
            <img class="w-2/3 rounded-lg" src="./images/learning.jpeg" />
          </div>
          <div class="p-6 flex justify-center items-center text-xl text-white-50">
            <Link to="/learn" className="NavBar-link main-title">
              Learn
            </Link>
          </div>
          <p class="text-1xl font-extrabold text-gray-500 text-center">
            Navigate the wonders behind the science of waves and explore how to blend music.{" "}
          </p>
        </div>
        <div class=" rounded-lg shadow-sm">
          <div class="flex justify-center items-center">
            <img class="w-2/3 rounded-lg" src="./images/blending.jpeg" />
          </div>
          <div class="p-6 flex justify-center items-center text-xl text-white-50">
            <Link to="/blend" className="NavBar-link main-title">
              Blend
            </Link>
          </div>
          <p class="text-1xl font-extrabold text-gray-500 text-center">
            Mix together different types of waveforms to create your own sounds.
          </p>{" "}
        </div>
      </div>
    </body>
  );
};

export default Home;
