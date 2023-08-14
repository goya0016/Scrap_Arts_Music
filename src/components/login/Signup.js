import React, { useState } from "react";
import firebaseLogin from "../../firebase/firebaseLogin";
import { Link } from "react-router-dom";
import "firebase/storage";
import "materialize-css";
import "./login-signup.css";
import { TextInput, Button } from "react-materialize";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [displayName, setDisplayName] = useState();
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState();


  //we log into our firebase db
  //when the user passes in their email and password
  //we send that data to the db to be stored.
  //aka the user registers an account
  //will have to add logic to this section so that they cannot pass in random stuff.

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      setEmailError(true);
      setEmailErrorMsg("the passwords are different");
      return null;
    } else {
      
  
      firebaseLogin
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          auth.user.updateProfile({
            displayName: displayName,
          });
        })
        .catch((error) => {
          
          if (error.code === "auth/weak-password") {
            console.log("weak-password");
            setEmailError(true);
            setEmailErrorMsg("weak password");
            
          } else{
            if (error.code === "auth/invalid-email") {
              
              setEmailErrorMsg("invalid mail");
              setEmailError(true);

            } else {
              if (error.code === "auth/email-already-in-use") {

                setEmailErrorMsg("email already in use");
                setEmailError(true);

              } else {
                  console.log("otro error");
              }

            }
          } 
          console.log(error.code);
          setEmailError(true);
        });
    }
  };

  return (
    <div className="center">
      <h4 className="signUpNavTitle">Sign Up</h4>

      <p>
        Sign up to save your favorite instruments and join our mailing list!
      </p>

      <form onSubmit={handleSubmit}>
        <TextInput
          id="TextInput-4"
          className="input"
          label="Name"
          type="text"
          onChange={({ target }) => setDisplayName(target.value)}
        />

        <TextInput
          id="TextInput-4"
          className="input"
          label="Email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />

        <TextInput
          id="TextInput-4"
          className="input"
          label="Password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />

        <TextInput
          id="TextInput-4"
          className="input"
          label="Confirm Password"
          type="password"
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
        {emailError ? (
          <p>{emailErrorMsg}, please try again.</p>
        ) : null}
        <br />

        <Button type="submit">Sign Up</Button>

        <div>
          <Link className="link" to="/login">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
