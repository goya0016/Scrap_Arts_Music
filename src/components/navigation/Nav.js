import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import firebaseLogin from "../../firebase/firebaseLogin";
import { BottomNavigation } from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { FaDrum } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { IoPersonSharp } from "react-icons/io5";
import { BsMusicNoteBeamed } from "react-icons/bs";

//checks if our user is logged in and appends the correct data for them to view.
//if the user is not logged in show them the sign up page.
//if the user is logged in shwo them the profile page.
const Nav = ({ isLoggedIn }) => {
  const matchesToMinWidth800px = useMediaQuery("(min-width:800px)");
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  //styling for our nav
  const useStyles = makeStyles({
    root: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      background: "black",
      height: 75,
      zIndex: 1,
      "&$selected": {
        color: "red",
      },
    },
    icon: {
      color: "#666565",
      fontSize: 28,
      justifyContent: "center",
    },
  });
  const classes = useStyles();

  //#region navigation buttons and their links
  const signOut = () => {
    firebaseLogin.auth().signOut();
    localStorage.clear();
    history.push("/home");
  };

  //goes to our home page
  const goHome = () => {
    history.push("/home");
  };

  //goes to our instruments page
  const goInstruments = () => {
    history.push("/instruments");
  };

  //goes to our instruments page
  const goStore = () => {
    history.push("/music_lab");
  };

  //goes to our login page
  const goLogin = () => {
    history.push("/login");
  };

  //goes to our profile page
  const goProfile = () => {
    history.push("/profile");
  };
  //#endregion

  // if screen is more than 800px
  if (matchesToMinWidth800px) {
    return (
      <div>
        {!isLoggedIn ? (
          <>
            <div>
              <ul className="navStyle">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/instruments">Instruments</Link>
                </li>
                <li>
                  <Link to="/music_lab">Music Lab</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div>
            <ul className="navStyle">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instruments">Instruments</Link>
              </li>
              <li>
                <Link to="/music_lab">Music Lab</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li onClick={signOut}>
                <a href="/login">Sign out</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  } else {
    // for mobile screen
    return (
      <div>
        {!isLoggedIn ? (
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction
              className={classes.icon}
              label="Home"
              onClick={goHome}
              icon={<ImHome />}
            />
            <BottomNavigationAction
              className={classes.icon}
              label="Instruments"
              onClick={goInstruments}
              icon={<FaDrum />}
            />
            <BottomNavigationAction
              className={classes.icon}
              label="Music Lab"
              onClick={goStore}
              icon={<BsMusicNoteBeamed className="Icon" />}
            />

            <BottomNavigationAction
              className={classes.icon}
              label="Profile"
              onClick={goLogin}
              icon={<IoPersonSharp />}
            />
          </BottomNavigation>
        ) : (
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction
              className={classes.icon}
              label="Home"
              Link
              onClick={goHome}
              icon={<ImHome />}
            />
            <BottomNavigationAction
              className={classes.icon}
              label="Instruments"
              onClick={goInstruments}
              icon={<FaDrum className="Icon" />}
            />
            <BottomNavigationAction
              className={classes.icon}
              label="Music Lab"
              onClick={goStore}
              icon={<BsMusicNoteBeamed className="Icon" />}
            />

            <BottomNavigationAction
              className={classes.icon}
              label="Profile"
              onClick={goProfile}
              icon={<IoPersonSharp />}
            />
          </BottomNavigation>
        )}
      </div>
    );
  }
};
export default Nav;
