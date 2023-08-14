import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import firebaseLogin from "../../firebase/firebaseLogin";
import "firebase/firestore";
import "./Profile.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaCog, FaStar, FaCheckCircle } from "react-icons/fa";
import Card from "@material-ui/core/Card";
// import { Button } from "react-materialize";
import CardMedia from "@material-ui/core/CardMedia";

//modal import
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

//menu imports
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

//passes in our current user from firebase and checks if they are logged in.
export default function Profile({ currentUser, user, instruments }) {
  const [favArray, setFavArray] = useState([]);
  const [instrumentID, setInstrumentID] = useState();
  const [buttonDisplay, setButtonDisplay] = useState(false);
  const [allInstruments, setAllInstruments] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false); // for edit profile modal
  const [modalStyle] = React.useState(getModalStyle); // modal profile
  var currentUsername = firebase.auth().currentUser; // update username
  const [username, setUsername] = useState(currentUsername); // update username
  const [newUserName, setNewUserName] = useState();
  const open = Boolean(anchorEl);
  const history = useHistory();

  console.log(buttonDisplay);
  console.log(username);

  // sign Out button
  const signOut = () => {
    firebaseLogin.auth().signOut();
    localStorage.clear();
    history.push("/login");
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const modalOpen = () => {
    setOpenModal(true);
    closeMenu();
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  //#region style for our modal
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 300,
      height: 200,
      color: "#000",
      borderRadius: 5,
      backgroundColor: "#fff",
      boxShadow: "-6px 7px 6px 3px rgba(0,0,0,0.74)",
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  //#endregion

  //#region useEffects
  //if our instruments is empty we will check localStorage to get our stored instruemnts
  //if it is not we will set our instruments to our current instruments
  useEffect(() => {
    if (!instruments) {
      setAllInstruments(JSON.parse(localStorage.getItem("instruments")));
    } else {
      setAllInstruments(instruments);
    }
  }, [instruments]);

  //we will get the user id from our database
  //whgen we get our user we will get if they have any favorites
  //if they have any favorites we will set it into our useState(favArray)

  // we also check our database to get the users profile img
  //we set the img url to our profileImg state
  useEffect(() => {
    const getArray = () => {
      firebase
        .firestore()
        .doc(`/users/${localStorage.getItem("userID")}`)
        .get()
        .then((doc) => {
          if (doc.data() === undefined) {
            setFavArray([]);
          } else {
            setFavArray(doc.data().favorites);
          }
        });
    };

    getArray();
  }, [user]);

  //#endregion
  //this iife will check if firebase has collection of subscribed to make sure it does not show undefined and if there is no subscribe data then it will add subscribed as false
  (function subscribe() {
    firebase
      .firestore()
      .doc(`users/${localStorage.getItem("userID")}`)
      .get()
      .then((data) => {
        if (data.data() === undefined) {
          firebase
            .firestore()
            .doc(`/users/${localStorage.getItem("userID")}`)
            .set({ subscribed: "false" }, { merge: true });
        }
        load();
      });
  })();

  //this function will get currentuser's email and send it to convertkit form and then if a user has already registed to convertkit then it will disappear the button
  const handleSubmit = (ev) => {
    ev.preventDefault();
    document.getElementById("form").value = currentUser.email;
    // let input
    var form = document.getElementById("SForm");
    document.getElementById("para").classList.toggle("activePara");
    var submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);

    firebase
      .firestore()
      .collection(`users`)
      .doc(user.uid)
      .update({ subscribed: "true" })
      .then(() => {
        document.getElementById("submit").classList.add("disabled");
      })
      .catch((error) => {});
    closeMenu();
  };
  //this function is to check when every time a page loads and if user has subscribed it will disappear button
  function load() {
    firebase
      .firestore()
      .doc(`users/${localStorage.getItem("userID")}`)
      .get()
      .then((data) => {
        console.log(data.data());
        if (data.data().subscribed === "true") {
          if (!data.data().favorites) {
            console.log("fav");

            firebase
              .firestore()
              .collection(`users`)
              .doc(user.uid)
              .update({ favorites: [] }, { merge: true });
          }
          document.getElementById("submit").classList.add("disabled");
        } else if (data.data().subscribed === "false") {
          if (!data.data().favorites) {
            console.log("fav");

            firebase
              .firestore()
              .collection(`users`)
              .doc(user.uid)
              .update({ favorites: [] }, { merge: true });
          }
        }
      });
  }

  const handleUpdate = () => {
    user
      .updateProfile({
        displayName: `${newUserName}`,
      })
      .catch(function (error) {});
    modalClose();
  };

  const stopUpdate = () => {
    setUsername(currentUsername.displayName);
    modalClose();
  };

  if (!user) {
    return null;
  } else {
    let currentFavs = [];
    firebase
      .firestore()
      .doc(`/users/${localStorage.getItem("userID")}`)
      .get()
      .then((doc) => {
        if (doc.data() === undefined) {
          return null;
        }
        currentFavs = doc.data().favorites;
        setButton(currentFavs);
      });
  }

  const setButton = (id) => {
    if (!id) {
    } else {
      id.map((item) => {
        if (item === instrumentID) {
          setInstrumentID();
          return setButtonDisplay(true);
        }
        return null;
      });
    }
  };

  return (
    <div>
      {!currentUser ? (
        <>
          <div>Please log in to check your profile</div>
        </>
      ) : (
        <>
          <div>
            {user.photoURL && (
              <img
                className="userProfilePicture"
                src={user.photoURL}
                alt={user.photoURL}
              ></img>
            )}
            <div className="infoContainer">
              {currentUser.displayName && (
                <div className="UserName">
                  {!newUserName ? currentUser.displayName : newUserName}
                </div>
              )}

              {/* settings button */}
              <div
                aria-controls="fade-menu"
                aria-haspopup="true"
                className="settingsIcon"
              >
                <IconContext.Provider
                  value={{
                    style: {
                      fontSize: "18px",
                      color: "#AFAFAF",
                      margin: "0px",
                    },
                  }}
                >
                  <FaCog onClick={openMenu} />
                </IconContext.Provider>

                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={closeMenu}
                  TransitionComponent={Fade}
                >
                  <MenuItem type="button" onClick={modalOpen}>
                    Edit profile
                  </MenuItem>
                  <Modal
                    open={openModal}
                    // onClose={modalClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <div className={classes.paper} style={modalStyle}>
                      <h6 id="simple-modal-title">Edit profile name</h6>
                      {/* Input field on modal */}
                      <TextField
                        id="filled-textarea"
                        label="New Name"
                        multiline
                        variant="filled"
                        onChange={({ target }) => setNewUserName(target.value)}
                      />
                      <button type="submit" onClick={handleUpdate}>
                        Save
                      </button>
                      <button onClick={stopUpdate}>Cancel</button>
                    </div>
                  </Modal>
                  <MenuItem id="submit" onClick={handleSubmit}>
                    Subscribe to mailing list.
                  </MenuItem>
                  <MenuItem onClick={signOut}>Sign out</MenuItem>
                </Menu>
              </div>
            </div>
          </div>

          {/* Instruments saved on User Profile */}
          {favArray && (
            <div>
              {/* Fav Instruments Title */}
              <div className="favInstrumentsContainer">
                <div className="favLabel" style={{ fontSize: "22px" }}>
                  <IconContext.Provider
                    value={{
                      style: {
                        fontFamily: "Faune",
                        fontSize: "16px",
                        // marginRight: "10px",
                        // color: "yellow",
                      },
                    }}
                  >
                    <FaStar className="favIcon" />
                  </IconContext.Provider>
                  <p className="favInstrument">Favourites instruments</p>
                </div>
                <div className="saved">
                  {favArray.map((item, index) => {
                    if (!allInstruments[item]) {
                      return <div> loading </div>;
                    } else {
                      return (
                        // card navigation
                        <Card
                          style={{ backgroundColor: "#434343", margin: "10px" }}
                        >
                          <Link
                            className="instrumentInfo"
                            to={`/instrument_information/${allInstruments[item].name}`}
                          >
                            {/* card image */}
                            <div className="imgCard">
                              <CardMedia
                                key={index}
                                component="img"
                                className="instrumentImg"
                                image={
                                  require(`../../Media/InstrumentProfileImg/${allInstruments[
                                    item
                                  ].name
                                    .split(" ")
                                    .join("")}.jpg`).default
                                }
                                alt={allInstruments[item].name}
                                title={allInstruments[item].name}
                              />
                            </div>
                            {/* Card labels */}
                            <div className="cardLabel">
                              <div
                                style={{
                                  fontFamily: "Faune",
                                  fontWeight: "400",
                                }}
                              >
                                {instruments[item].name}
                              </div>
                              <p style={{ fontSize: "16px", margin: "0px" }}>
                                About Instruments
                              </p>
                            </div>
                          </Link>
                        </Card>
                      );
                    }
                  })}
                </div>
              </div>
              <form
                action="https://app.convertkit.com/forms/2197867/subscriptions"
                id="SForm"
                data-sv-form="2197867"
                data-uid="e7a9be9bb7"
                method="post"
              >
                <input
                  class="formkit-input"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  id="form"
                ></input>
              </form>
              {/* <Button id="submit" onClick={handleSubmit}>
                Subscribe To Newsletter
              </Button> */}

              <div id="para" class="activePara">
                <p>
                  <FaCheckCircle className="checkIcon" />
                  Thanks for Subscribing
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
