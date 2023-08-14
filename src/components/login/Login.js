import React, { useState } from "react";
import firebaseLogin from "../../firebase/firebaseLogin";
import { Link, useHistory } from "react-router-dom";
import "materialize-css";
import "./login-signup.css";
import { TextInput, Button } from "react-materialize";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const [loginErrorDisplay, setLoginErrorDisplay] = useState(false);
  var provider = new firebaseLogin.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  firebaseLogin.auth().languageCode = "en";

  //logs with account created by the user
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const signInHandler = () => {
    firebaseLogin
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setLoginErrorDisplay(true);
      });
  };

  //google auth login for users login with their emails.
  const googleLogin = () => {
    firebaseLogin
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        history.push("/home");
      })
      .catch((error) => {});
  };

  return (
    <div className="center">
      <h4 className="loginNavTitle">Login</h4>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="TextInput-4"
          className="input"
          label="Email"
          onChange={({ target }) => setEmail(target.value)}
        />

        <TextInput
          id="TextInput-4"
          className="input"
          label="Password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />

        {loginErrorDisplay ? <p>invalid information pleaes try again</p> : null}

        <br />

        <Button
          node="button"
          style={{ marginRight: "5px", marginTop: "5px" }}
          className="button-block"
          waves="light"
          type="submit"
          onClick={signInHandler}
        >
          Sign in
        </Button>

        <Button
          node="button"
          style={{ marginRight: "5px", marginTop: "5px" }}
          className="button-block"
          waves="light"
          onClick={googleLogin}
        >
          google login
        </Button>
      </form>
      <div classname="bottomLink">
        <div className="signuplink">
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </div>

        <div>
          <Link className="link" to="/forgotpassword">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
