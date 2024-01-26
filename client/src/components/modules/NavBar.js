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
    <nav class="flex space-x-10 hidden md:flex-1 md:flex md:items-center md:justify-between">
      {/* <div className="NavBar-title u-inlineBlock">Catbook</div> */}
      <div class="flex">
        <div class="flex items-center inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Link to="/" className="NavBar-link">
            Home
          </Link>
          <Link to="/learn" className="NavBar-link">
            Learn
          </Link>
          <Link to="/blend" className="NavBar-link">
            Blend
          </Link>
          <Link to="/play" className="NavBar-link">
            Play
          </Link>
        </div>

        <div>
          <>
            {props.userId ? <div className="name">Welcome {props.decodedName}!</div> : <div> </div>}
          </>
          <div>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID} className="Navbar-login">
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
