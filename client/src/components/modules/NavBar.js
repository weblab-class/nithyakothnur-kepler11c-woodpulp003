import React from "react";
import { Link } from "react-router-dom";

// import "./NavBar.css";

/*
The navigation bar takes no props
*/

import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

// import "../../utilities.css";

const GOOGLE_CLIENT_ID = "797662258474-8kbeajde3f0trr5kbg77tsa5l0abv1o6.apps.googleusercontent.com";

const NavBar = (props) => {
  return (
    <nav class="py-2 border-2 border-blue-900 rounded-full m-8">
      {/* <div className="NavBar-title u-inlineBlock">Catbook</div> */}
      <div class="flex flex-row items-center justify-between">
        <div class="flex space-x-4 items-center inline-flex items-center text-base font-medium">
          <Link
            to="/"
            class="px-4 text-2xl hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Home
          </Link>
          <Link
            to="/learn"
            class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Learn
          </Link>
          <Link
            to="/blend"
            class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Blend
          </Link>
        </div>

        <div class="px-20">
          <>
            {props.userId ? <div className="name">Welcome {props.decodedName}!</div> : <div> </div>}
          </>
          <div>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID} class="-inset-x-2">
              {props.userId ? (
                <button
                  onClick={() => {
                    googleLogout();
                    props.handleLogout();
                    // console.log(props.userId);
                  }}
                >
                  Logout
                </button>
              ) : (
                // <button> Login</button>
                <GoogleLogin onSuccess={props.handleLogin} onError={(err) => console.log(err)} />
                // <button
                //   onClick={() => {
                //     <GoogleLogin onSuccess={props.handleLogin} onError={(err) => console.log(err)} />;
                //     // googleLogout();
                //     // props.handleLogout();
                //     // console.log("I am logging out");
                //     // console.log(props.userId);
                //   }}
                // >
                //   Login
                // </button>
              )}
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
