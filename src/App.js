import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Nav from "./components/navigation/Nav";
import Home from "./components/home/Home";
import Events from "./components/events/Events";
import firebaseLogin from "./firebase/firebaseLogin";
import ForgotPassword from "./components/login/ForgotPassword";
import DisplayInstruments from "./components/instruments/DisplayInstruments";
import Profile from "./components/Profile/Profile";
import DisplaySingleInstrument from "./components/instruments/DisplaySingleInstrument";
import DisplaySingleEvents from "./components/events/DisplaySingleEvents";
import Bio from "./components/Bio/Bio";
import InstallButton from "./components/InstallButton/InstallButton";
import SamInfo from "./components/SamInfo/SamInfo";
import Store from "./components/Store/Store";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [firebaseEventStorageData, setfirebaseEventStorageData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [
    firebaseInsturmentStorageData,
    setfirebaseInsturmentStorageData,
  ] = useState([]);
  const [creatorBio, setCreatorBio] = useState();
  const [scrapCreatorBio, setScrapCreatorBio] = useState();
  const [COMInfo, setCOMInfo] = useState();
  const [installDisplay, setInstallDisplay] = useState(false);
  const [listenDeferredPrompt, setListenDeferredPrompt] = useState();

  //if app is installed
  useEffect(() => {
    window.addEventListener("appinstalled", (evt) => {
      setInstallDisplay(false);
    });
  });

  //install prompt for pwa.
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setListenDeferredPrompt(e);
      setInstallDisplay(true);
    });
  });

  //check if pwa is installed.
  useEffect(() => {
    window.addEventListener("appinstalled", (e) => {
      setInstallDisplay(false);
    });
  });

  //to check if we’re authenticated.
  firebaseLogin.auth().onAuthStateChanged((user) => {
    setCurrentUser(user);
    return user
      ? [setIsLoggedIn(true), localStorage.setItem("userID", `${user.uid}`)]
      : setIsLoggedIn(false);
  });

  //get our instrument api information
  //store it inside our firebaseInstrumentStorageData prop
  useEffect(() => {
    async function fetchInstrumentData() {
      const dbInstrumentRef = firebase.database().ref("instruments");
      await dbInstrumentRef.once("value", (snapshot) => {
        setfirebaseInsturmentStorageData(snapshot.val());
        localStorage.setItem("instruments", JSON.stringify(snapshot.val()));
      });
    }
    fetchInstrumentData();
  }, []);

  //gets our event api information
  //store it inside our firebaseEventStorageData prop
  useEffect(() => {
    async function fetchEventData() {
      const dbEventRef = firebase.database().ref("event");
      await dbEventRef.once("value", (snapshot) => {
        setfirebaseEventStorageData(snapshot.val());
      });
    }
    fetchEventData();
  }, []);

  useEffect(() => {
    async function fetchCreatorData() {
      const dbEventRef = firebase.database().ref("sam_biography");
      await dbEventRef.once("value", (snapshot) => {
        setCreatorBio(snapshot.val());
        localStorage.setItem("sam_bio", JSON.stringify(snapshot.val()));
      });
    }
    fetchCreatorData();
  }, []);

  useEffect(() => {
    async function fetchCreatorData() {
      const dbEventRef = firebase.database().ref("webscraping");
      await dbEventRef.once("value", (snapshot) => {
        setScrapCreatorBio(snapshot.val());
        localStorage.setItem("webscraping", JSON.stringify(snapshot.val()));
      });
    }
    fetchCreatorData();
  }, []);

  useEffect(() => {
    async function fetchCOMData() {
      const dbEventRef = firebase.database().ref("COM");
      await dbEventRef.once("value", (snapshot) => {
        setCOMInfo(snapshot.val());
      });
    }
    fetchCOMData();
  }, []);

  return (
    <div className="App">
      <Router>
        {installDisplay ? (
          <InstallButton
            prompt={listenDeferredPrompt}
            display={setInstallDisplay}
            displayCheck={installDisplay}
          ></InstallButton>
        ) : null}
        {!isLoggedIn ? (
          <>
            <div>
              <Nav />
            </div>
            <div>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/home"
                  component={() => (
                    <Home
                      events={firebaseEventStorageData}
                      user={currentUser}
                      creatorBio={creatorBio}
                      scrapCreatorBio={scrapCreatorBio}
                      com={COMInfo}
                    />
                  )}
                />
                <Route exact path="/signup" component={Signup} />
                <Route
                  exact
                  path="/instruments"
                  component={() => (
                    <DisplayInstruments
                      instruments={firebaseInsturmentStorageData}
                    />
                  )}
                />
                <Route
                  exact
                  path="/events"
                  component={() => <Events events={firebaseEventStorageData} />}
                />
                <Route
                  exact
                  path="/instrument_information/:instrumentName"
                  component={() => (
                    <DisplaySingleInstrument
                      instruments={firebaseInsturmentStorageData}
                      user={currentUser}
                    />
                  )}
                />
                <Route
                  exact
                  path="/music_lab"
                  component={() => <Store></Store>}
                />
                <Route
                  exact
                  path="/events/:eventName"
                  component={() => (
                    <DisplaySingleEvents events={firebaseEventStorageData} />
                  )}
                />
                <Route
                  exact
                  path="/forgotpassword"
                  component={ForgotPassword}
                />
                <Route exact path="/profile" component={Profile} />

                <Route
                  exact
                  path="/creator_information"
                  component={() => (
                    <Bio
                      creatorBio={creatorBio}
                      scrapCreatorBio={scrapCreatorBio}
                    />
                  )}
                />

                <Route
                  exact
                  path="/creator_information/:creatorName"
                  component={() => (
                    <Bio
                      creatorBio={creatorBio}
                      scrapCreatorBio={scrapCreatorBio}
                    />
                  )}
                />

                <Route
                  exact
                  path="/about_com"
                  component={() => <SamInfo comInfo={COMInfo}></SamInfo>}
                />

                <Home
                  events={firebaseEventStorageData}
                  user={currentUser}
                  creatorBio={creatorBio}
                  scrapCreatorBio={scrapCreatorBio}
                  com={COMInfo}
                />
              </Switch>
            </div>
          </>
        ) : (
          <div>
            <Nav isLoggedIn={isLoggedIn} />
            <Switch>
              <Route
                exact
                path="/instruments"
                component={() => (
                  <DisplayInstruments
                    instruments={firebaseInsturmentStorageData}
                  />
                )}
              />
              <Route
                exact
                path="/events"
                component={() => <Events events={firebaseEventStorageData} />}
              />
              <Route
                exact
                path="/events/:eventName"
                component={() => (
                  <DisplaySingleEvents events={firebaseEventStorageData} />
                )}
              />
              <Route
                exact
                path="/instrument_information/:instrumentName"
                component={() => (
                  <DisplaySingleInstrument
                    instruments={firebaseInsturmentStorageData}
                    user={currentUser}
                  />
                )}
              />
              <Route
                exact
                path="/music_lab"
                component={() => <Store></Store>}
              />
              <Route
                exact
                path="/profile"
                component={() => (
                  <Profile
                    currentUser={currentUser}
                    user={currentUser}
                    instruments={firebaseInsturmentStorageData}
                  />
                )}
              />
              <Route
                exact
                path="/about_com"
                component={() => <SamInfo comInfo={COMInfo}></SamInfo>}
              />
              <Route
                exact
                path="/creator_information/:creatorName"
                component={() => (
                  <Bio
                    creatorBio={creatorBio}
                    scrapCreatorBio={scrapCreatorBio}
                  />
                )}
              />

              <Home
                events={firebaseEventStorageData}
                user={currentUser}
                creatorBio={creatorBio}
                scrapCreatorBio={scrapCreatorBio}
                com={COMInfo}
              />
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
