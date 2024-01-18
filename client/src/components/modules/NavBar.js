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
      <div className="NavBar-title u-inlineBlock">Catbook</div>
      <div className="NavBar-linkContainer u-inlineBlock">
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
        {
          <Link to="/profile/" className="NavBar-link">
            Profile
          </Link>
        }
      </div>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {props.userId ? (
          <button
            onClick={() => {
              googleLogout();
              props.handleLogout;
            }}
          >
            Logout
          </button>
        ) : (
          <GoogleLogin onSuccess={props.handleLogin} onError={(err) => console.log(err)} />
        )}
      </GoogleOAuthProvider>
      {/* {props.userId && (
          <Link to={`/profile/${props.userId}`} className="NavBar-link">
            Profile
          </Link>
        )}
        {props.userId ? (
          <GoogleOAuthProvider
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )} */}
    </nav>
  );
};

export default NavBar;
