import React, { useState } from "react";
import firebaseLogin from "../../firebase/firebaseLogin";
import { Link } from "react-router-dom";
import "materialize-css";

import "./login-signup.css";

import { TextInput, Button } from "react-materialize";

export default function ForgotPassword() {
  const [email, setEmail] = useState();
  var auth = firebaseLogin.auth();

  //function to send reset password
  //we take the users input e-mail and store it
  //we then call built in firebase function sendpasswordresetemail
  //and sent user a passsword reset.
  const resetPassword = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("reset password sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="center">
      <h4>forgot password</h4>
      <form>
        <TextInput
          id="TextInput-4"
          className="input"
          label="Email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </form>

      <Button
        node="button"
        className="button-block reset"
        waves="light"
        type="submit"
        onClick={resetPassword}
      >
        <Link to="./login">reset</Link>
      </Button>
    </div>
  );
}
