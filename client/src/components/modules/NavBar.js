import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

/*
The navigation bar takes no props
*/

import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";

const GOOGLE_CLIENT_ID = "797662258474-8kbeajde3f0trr5kbg77tsa5l0abv1o6.apps.googleusercontent.com";

const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      {/* <div className="NavBar-title u-inlineBlock">Catbook</div> */}
      <div className="NavBar-linkContainer u-inlineBlock">
        <div className="NavBar-left">
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

        <div className="NavBar-right">
          <Link to="/profile/" className="NavBar-link">
            Profile
          </Link>
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID} className="Navbar-login">
            {props.userId ? (
              <button
                onClick={() => {
                  googleLogout();
                  props.handleLogout();
                  console.log("I am logging out");
                  console.log(props.userId);
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
    </nav>
  );
};

export default NavBar;
