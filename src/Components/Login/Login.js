import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./Login.css";
import { UserContext } from "../../App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photoURL: "",
  });

  const [loggedinUser, setLoggedinUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  //   google athentication
  const handleGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        console.log("Name:", displayName, "Photo:", photoURL, "Email:", email);
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };

        setUser(signInUser);
        setLoggedinUser(signInUser);
        history.replace(from);
        alert("login successfully");

        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
        //   console.log(error,errorMessage,email,credential);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signOutUser);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    console.log("res");
  };

  //   facebook athentication
  var facebookProvider = new firebase.auth.FacebookAuthProvider();

  const handleFacebookLogin = () => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  };

  return (
    <section className="login">
      <div className="container">
        <div className="login_header text-center mt-4">
          <h1>This is login </h1>
          {user.isSignIn && (
            <div>
              <img src={user.photo} alt="" />
              <h2>welcome, {user.name}</h2>
              <h2>your email, {user.email}</h2>
            </div>
          )}
          {user.isSignIn ? (
            <button className="btn btn-outline-primary" onClick={handleSignOut}>
              log out
            </button>
          ) : (
            <button className="btn btn-outline-danger" onClick={handleGoogle}>
              Google Login
            </button>
          )}
          <br />
          <br />
          <button
            className="btn btn-outline-primary"
            onClick={handleFacebookLogin}
          >
            Sign in Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
