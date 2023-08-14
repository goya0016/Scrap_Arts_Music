import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Alumospring from "./Alumopsring/Alumospring";
import Antlers from "./Antlers/Antlers";
import DervishDrums from "./DervishDrums/DervishDrums";
import FlyingCanofDanger from "./FlyingCanofDanger/FlyingCanofDanger";
import HumungaDrum from "./HumungaDrum/HumungaDrum";
import KeysterClustery from "./KeysterClustery/KeysterClustery";
import MissletheRed from "./MissletheRed/MissletheRed";
import Nonette from "./Nonette/Nonette";
import Pippolini from "./Pippolini/Pippolini";
import Plankophone from "./Plankophone/Plankophone";
import Snuffy from "./Snuffy/Snuffy";
import TheEye from "./TheEye/TheEye";
import TheMojo from "./TheMojo/TheMojo";
import WallEHorn from "./Wall-EHorn/Wall-EHorn";
import Xylobe from "./Xylobe/Xylobe";
import ZigguratDrum from "./ZigguratDrum/ZigguratDrum";

import "./DisplaySingleInstrument.css";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ReactAudioPlayer from "react-audio-player";
import { FaChess } from "react-icons/fa";
import { IoHammerSharp } from "react-icons/io5";
//styling
import {
  AppBar,
  Box,
  CircularProgress,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

let body = <div>hello</div>;

//takes in our instrument prop`
function DisplaySingleInstrument({ instruments, user }) {
  //#region variables
  const { instrumentName } = useParams();
  const [currentRenderInstrument, setCurrentRenderInstrument] = useState();
  const [findInstrumentData, setfindInstrumentData] = useState();
  const [instrumentID, setInstrumentID] = useState();
  const [buttonDisplay, setButtonDisplay] = useState(false);
  const [loopName, setLoopName] = useState();
  const [antlerLoop, setAntlerLoop] = useState(false);
  const [bellLoop, setBellLoop] = useState(false);
  const [drumLoop, setDrumLoop] = useState(false);
  const [nailViolinLoop, setNailViolinLoop] = useState(false);
  const [plankophoneLoopTwo, setPlankophoneLoopTwo] = useState(false);
  const [plankophoneLoopThree, setPlankophoneLoopThree] = useState(false);
  const [snuffyLoop, setSnuffyLoop] = useState(false);
  const [wagnerLoop, setWagnerLoop] = useState(false);
  const [xylobeLoop, setXylobeLoop] = useState(false);

  const [openListItemOne, setOpenListItemOne] = useState(false);
  const [openListItemTwo, setOpenListItemTwo] = useState(false);
  const [openListItemThree, setOpenListItemThree] = useState(false);
  const [openListItemFour, setOpenListItemFour] = useState(false);
  const [openListItemFive, setOpenListItemFive] = useState(false);
  const [openListItemSix, setOpenListItemSix] = useState(false);
  const [openListItemSeven, setOpenListItemSeven] = useState(false);
  const [openListItemEight, setOpenListItemEight] = useState(false);
  const [openListItemNine, setOpenListItemNine] = useState(false);
  //#endregion

  //#region loopFilterSwitch
  //checks our current current and displays the correct loops for that instrument

  //#region list handlers
  const handleListClickOne = () => {
    setOpenListItemOne(!openListItemOne);
  };
  const handleListClickTwo = () => {
    setOpenListItemTwo(!openListItemTwo);
  };
  const handleListClickThree = () => {
    setOpenListItemThree(!openListItemThree);
  };
  const handleListClickFour = () => {
    setOpenListItemFour(!openListItemFour);
  };
  const handleListClickFive = () => {
    setOpenListItemFive(!openListItemFive);
  };
  const handleListClickSix = () => {
    setOpenListItemSix(!openListItemSix);
  };
  const handleListClickSeven = () => {
    setOpenListItemSeven(!openListItemSeven);
  };
  const handleListClickEight = () => {
    setOpenListItemEight(!openListItemEight);
  };
  const handleListClickNine = () => {
    setOpenListItemNine(!openListItemNine);
  };

  //#endregion

  useEffect(() => {
    switch (loopName) {
      case "Alumospring":
        setAntlerLoop(true);
        setSnuffyLoop(true);
        break;

      case "Antlers":
        setAntlerLoop(true);
        setWagnerLoop(true);
        break;

      case "DervishDrums":
        setDrumLoop(true);
        setSnuffyLoop(true);
        break;

      case "FlyingCanofDanger":
        break;

      case "HumungaDrum":
        setDrumLoop(true);
        break;

      case "KeysterClustery":
        setBellLoop(true);
        break;

      case "MissletheRed":
        break;

      case "Nonette":
        setAntlerLoop(true);
        break;

      case "Pippolini":
        setWagnerLoop(true);
        setXylobeLoop(true);
        break;

      case "Plankophone":
        setPlankophoneLoopTwo(true);
        setPlankophoneLoopThree(true);
        break;

      case "Snuffy":
        setSnuffyLoop(true);
        break;

      case "TheEye":
        setNailViolinLoop(true);
        setWagnerLoop(true);
        break;

      case "TheMojo":
        setAntlerLoop(true);
        break;

      case "Wall-EHorn":
        break;

      case "Xylobe":
        setBellLoop(true);
        setXylobeLoop(true);
        break;

      case "ZigguratDrum":
        setDrumLoop(true);
        break;

      default:
        setAntlerLoop(false);
        setBellLoop(false);
        setDrumLoop(false);
        setNailViolinLoop(false);
        setPlankophoneLoopTwo(false);
        setPlankophoneLoopThree(false);
        setSnuffyLoop(false);
        setWagnerLoop(false);
        setXylobeLoop(false);
    }
  }, [loopName]);

  //#endregion

  //#region tabs
  //Tabs function to pass in prop to our material UI generated tabs.
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function tabProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  //style for our tabs.
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  //when tab is clicked we set which tab is picked and to be displayed.
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //#endregion

  //#region components to other instruments

  //create a component to hold our imported isntruments that we will be rendering out
  let components = {
    Alumospring: Alumospring,
    Antlers: Antlers,
    DervishDrums: DervishDrums,
    FlyingCanofDanger: FlyingCanofDanger,
    HumungaDrum: HumungaDrum,
    KeysterClustery: KeysterClustery,
    MissletheRed: MissletheRed,
    Nonette: Nonette,
    Pippolini: Pippolini,
    Plankophone: Plankophone,
    Snuffy: Snuffy,
    TheEye: TheEye,
    TheMojo: TheMojo,
    "Wall-EHorn": WallEHorn,
    Xylobe: Xylobe,
    ZigguratDrum: ZigguratDrum,
  };

  const CurrentInstrumentName = components[currentRenderInstrument];

  //#endregion

  //#region firebase components

  //#region firebase save fav instrument
  firebase
    .firestore()
    .collection("instrument")
    .get((snapshot) => {});

  //if create a new user in our database using their id
  if (!user) {
  } else {
    const lastSaved = { updateOn: new Date() };
    firebase
      .firestore()
      .doc(`/users/${user.uid}`)
      .set(lastSaved, { merge: true });
  }

  //with the uid from the user we add them to our database
  //we append their favorites to our database using an array
  const saveFav = () => {
    const lastSaved = { updateOn: new Date() };
   
    firebase
      .firestore()
      .doc(`/users/${user.uid}`)
      .set(lastSaved, { merge: true });

    firebase
      .firestore()
      .collection(`users`)
      .doc(user.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayUnion(instrumentID),
      });
    setButtonDisplay(true);
  };

  //we get our user
  //we append the new array with the updated instruments to their favorites
  const removeFav = () => {
    const testData = { updateOn: new Date() };

    firebase
      .firestore()
      .doc(`/users/${user.uid}`)
      .set(testData, { merge: true });

    firebase
      .firestore()
      .collection(`users`)
      .doc(user.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayRemove(instrumentID),
      });
    setButtonDisplay(false);
  };

  if (!user) {
    console.log("waiting for user id");
  } else {
    let currentFavs = [];
    firebase
      .firestore()
      .doc(`/users/${user.uid}`)
      .get()
      .then((doc) => {
        currentFavs = doc.data().favorites;
        setButton(currentFavs);
      });
  }
  //#endregion

  //wait for the data
  //We then find the correct instrument using the params name.
  //and set the found instrument inside of our useState
  useEffect(() => {
    let name = instrumentName.split(" ").join("");
    setLoopName(name);
    instruments.map((item) => {
      if (item.name === instrumentName) {
        setCurrentRenderInstrument(name);
        setInstrumentID(item.instrument_id);
        setfindInstrumentData(item);
      }
      return null;
    });
  }, [instruments, instrumentName]);
  //#endregion

  //function to set our button
  //takes in an id and checks the item is in the user's fav
  //if it matches chance button to unfav
  const setButton = (id) => {
    if (!id) {
      return null;
    } else {
      id.map((item) => {
        if (item === instrumentID) {
          return setButtonDisplay(true);
        }
        return null;
      });
    }
  };

  if (!findInstrumentData) {
    body = <CircularProgress></CircularProgress>;
  } else {
    body = (
      <div className="header">
        <div>
          <div className="name">{findInstrumentData.name}</div>
          <div className="group">{findInstrumentData.instrument_group}</div>
        </div>
        {user && (
          <div className="favDiv">
            {buttonDisplay ? (
              <div className="favInstrument">
                <StarIcon onClick={removeFav}></StarIcon>
              </div>
            ) : (
              <div className="favInstrument">
                <StarBorderIcon onClick={saveFav}></StarBorderIcon>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (!CurrentInstrumentName || !findInstrumentData) {
    return (
      <div>
        <div>LOADING</div>
      </div>
    );
  }
  return (
    <div className="fade">
      <CurrentInstrumentName instruments={instruments} />
      {}

      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Biography" {...tabProps(0)} />
            <Tab label="Examples" {...tabProps(1)} />
            <Tab label="Gallery" {...tabProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div class="bio">
            {body}
            <div className="individualInfoItems">
              <div className="center">
                <div className="flex">
                  <div className="top secret">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="53.018"
                      height="31.811"
                      viewBox="0 0 53.018 31.811"
                    >
                      <path
                        id="mask-solid"
                        d="M26.566,64C-10.1,64-3.056,95.811,13.439,95.811a10.21,10.21,0,0,0,8.4-4.627l2.132-3.131a3.07,3.07,0,0,1,5.188,0l2.131,3.131a10.208,10.208,0,0,0,8.4,4.627C55.421,95.811,63.769,64,26.566,64ZM15.244,84.243a8.578,8.578,0,0,1-6.634-3.4,1.514,1.514,0,0,1,0-1.875,8.574,8.574,0,0,1,6.634-3.4,8.577,8.577,0,0,1,6.634,3.4,1.514,1.514,0,0,1,0,1.875A8.576,8.576,0,0,1,15.244,84.243Zm22.533,0a8.578,8.578,0,0,1-6.634-3.4,1.514,1.514,0,0,1,0-1.875,8.574,8.574,0,0,1,6.634-3.4,8.577,8.577,0,0,1,6.634,3.4,1.514,1.514,0,0,1,0,1.875A8.576,8.576,0,0,1,37.776,84.243Z"
                        transform="translate(-0.001 -64)"
                        fill="#525252"
                      />
                    </svg>

                    <p className="underline">Secret</p>
                    <div className="info">
                      {findInstrumentData.instrument_secret}
                    </div>
                  </div>
                  <div className="top worst">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45.882"
                      height="31.813"
                      viewBox="0 0 45.882 31.813"
                    >
                      <path
                        id="comment-alt-solid"
                        d="M40.146,0H5.735C2.572,0,0,1.783,0,3.976V21.87c0,2.193,2.572,3.976,5.735,3.976h8.6v5.219c0,.609,1,.963,1.712.6l11.193-5.822h12.9c3.163,0,5.735-1.783,5.735-3.976V3.976C45.882,1.783,43.31,0,40.146,0Z"
                        fill="#a72929"
                      />
                    </svg>
                    <p className="underline">Worst Trait</p>

                    <div className="info">
                      {findInstrumentData.instrument_worsttrait}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="top dislike">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42.827"
                      height="38.093"
                      viewBox="0 0 42.827 38.093"
                    >
                      <path
                        id="thumbs-down-solid"
                        d="M0,4.166V22.022a1.906,1.906,0,0,0,2.008,1.786H8.7a1.906,1.906,0,0,0,2.008-1.786V4.166A1.906,1.906,0,0,0,8.7,2.381H2.008A1.906,1.906,0,0,0,0,4.166Zm3.346,14.88a1.906,1.906,0,0,1,2.008-1.786,1.906,1.906,0,0,1,2.008,1.786,1.906,1.906,0,0,1-2.008,1.786A1.906,1.906,0,0,1,3.346,19.046ZM26.1,38.093c-1.688,0-2.466-2.923-2.838-4.3-.435-1.612-.886-3.279-2.124-4.382-2.716-2.42-4.141-5.5-7.454-8.415a.845.845,0,0,1-.3-.634V4.457a.951.951,0,0,1,.986-.893,14.383,14.383,0,0,0,4.4-1.2,26.362,26.362,0,0,1,10-2.36h.238c3.578,0,7.81.031,9.517,2.212a3.584,3.584,0,0,1,.514,3.321,5.409,5.409,0,0,1,1.37,5.562,5.642,5.642,0,0,1,.779,5.912l.009.008a5.082,5.082,0,0,1,1.626,3.66C42.814,22.934,40.639,25,37.846,25H29.337c.611,2.108,2.784,3.879,2.784,7.034C32.121,37.5,28.105,38.093,26.1,38.093Z"
                        fill="#d2a614"
                      />
                    </svg>

                    <p className="underline"> Dislikes ost </p>
                    <div className="info">
                      {findInstrumentData.instrument_dislikes}
                    </div>
                  </div>
                  <div className="top important">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37.021"
                      height="37.021"
                      viewBox="0 0 37.021 37.021"
                    >
                      <path
                        id="exclamation-circle-solid"
                        d="M45.021,26.51A18.51,18.51,0,1,1,26.51,8,18.509,18.509,0,0,1,45.021,26.51ZM26.51,30.242a3.433,3.433,0,1,0,3.433,3.433A3.433,3.433,0,0,0,26.51,30.242ZM23.251,17.9,23.8,28.052a.9.9,0,0,0,.894.847h3.623a.9.9,0,0,0,.894-.847L29.77,17.9a.9.9,0,0,0-.894-.944H24.145a.9.9,0,0,0-.894.944Z"
                        transform="translate(-8 -8)"
                        fill="#739b65"
                      />
                    </svg>

                    <p className="underline"> Important</p>
                    <div className="info">
                      {findInstrumentData.instrument_important}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="top play">
                      <FaChess fill="#299096" size="45px"/>

                    <p className="underline"> Plays With Others </p>
                    <div className="info">
                      {findInstrumentData.instrument_playwith_others}
                    </div>
                  </div>
                  <div className="top parts">
                    <IoHammerSharp fill="#cc561e" size="45px"/>
                    <p className="underline"> Parts</p>
                    <div className="info">
                      {findInstrumentData.instrument_parts}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="individualLoopContainers">
            {body}
            <p>
              Scrap Arts Music has a large library of digital audio samples of
              our instruments. Only a few are featured in the Scrap-App. The
              following "Example Tracks" give an idea of how these can be used
              in composition, whether using them as pure sounds, modifying the
              digital samples, or combining them with live performance
              recordings.
            </p>
            {antlerLoop ? (
              <div>
                <List>
                  <ListItem button onClick={handleListClickOne}>
                    <ListItemText primary="Example 1" />
                    {openListItemOne ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openListItemOne} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemText>
                        Instruments featured in this example:
                      </ListItemText>
                      <ListItemText>Antlers</ListItemText>
                      <ListItemText>Alumospring</ListItemText>
                      <ListItemText>Sighchordion</ListItemText>
                    </List>
                  </Collapse>
                </List>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Loops%2FAntlers%20Loop%20-%20App%20Mix%201.mp3?alt=media&token=d09662f4-4247-4eaa-bd55-99d451334de8"
                  }
                  loop={true}
                  controls
                />
              </div>
            ) : null}

            {bellLoop ? (
              <div>
                <List>
                  <ListItem button onClick={handleListClickTwo}>
                    <ListItemText primary="Example 2" />
                    {openListItemTwo ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openListItemTwo} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemText>
                        Instruments featured in this example:
                      </ListItemText>
                      <ListItemText>Keyster Clustery</ListItemText>
                      <ListItemText>Xylobe</ListItemText>
                    </List>
                  </Collapse>
                </List>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Loops%2FBell%20Choir%20Loop%20-%20App%20Mix%201.mp3?alt=media&token=bc1d9f0b-dd13-434a-91b2-c680318e6acc"
                  }
                  loop={true}
                  controls
                />
              </div>
            ) : null}

            {drumLoop ? (
              <div>
                <List>
                  <ListItem button onClick={handleListClickThree}>
                    <ListItemText primary="Example 3" />
                    {openListItemThree ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openListItemThree} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemText>
                        Instruments featured in this example:
                      </ListItemText>
                      <ListItemText>Humunga</ListItemText>
                      <ListItemText>Ziggurat</ListItemText>
                      <ListItemText>Hourglass</ListItemText>
                      <ListItemText>Dervish</ListItemText>
                      <ListItemText>B52</ListItemText>
                      <ListItemText>Junk on a stick</ListItemText>
                      <ListItemText>Discarded cymbals</ListItemText>
                    </List>
                  </Collapse>
                </List>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Loops%2FDrum%20Loop%20Composition%20-%20App%20Loop%201.mp3?alt=media&token=34a8cb78-cb32-464c-a306-4e0e7b714ff3"
                  }
                  loop={true}
                  controls
                />
              </div>
            ) : null}

            {nailViolinLoop ? (
              <div>
                <List>
                  <ListItem button onClick={handleListClickFour}>
                    <ListItemText primary="Example 4" />
                    {openListItemFour ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openListItemFour} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemText>
                        Instruments featured in this example:
                      </ListItemText>
                      <ListItemText>The Eye (2)</ListItemText>
                      <ListItemText>Exhaust vent</ListItemText>
                    </List>
                  </Collapse>
                </List>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Loops%2FNail%20Violin%20-%20AG%20App%20Mix%201.mp3?alt=media&token=da00a4a6-37bc-4866-8988-7133e1045985"
                  }
                  loop={true}
                  controls
                />
              </div>
            ) : null}

            {plankophoneLoopTwo ? (
              <div>
                <List>
                  <ListItem button onClick={handleListClickFive}>
                    <ListItemText primary="Example 5" />
                    {openListItemFive ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openListItemFive} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemText>
                        Instruments featured in this example:
                      </ListItemText>
                      <ListItemText>Plankophone</ListItemText>
                    </List>
                  </Collapse>
                </List>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Loops%2FPlankophone%20Loop%202%20-%20App%20Mix%201.mp3?alt=media&token=fcc9d832-d91c-4488-bf71-df4980a6abeb"
                  }
                  loop={true}
                  controls
                />
              </div>
            ) : null}

            {plankophoneLoopThree ? (
              <div>
                <List>
                  <ListItem button onClick={handleListClickNine}>
                    <ListItemText primary="Example 9" />
                    {openListItemFive ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openListItemNine} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemText>
                        Instruments featured in this example:
                      </ListItemText>
                      <ListItemText>Plankophone</ListItemText>
                    </List>
                  </Collapse>
                </List>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Loops%2FPlankophone%20Loop%203%20-%20App%20Mix%201.mp3?alt=media&token=31a365ad-da83-4e81-9ca7-b38e996eaee3"
                  }
                  loop={true}
                  controls
                />
              </div>
            ) : null}

            {snuffyLoop ? (
              <div>
                <List>
                  <ListItem button onClick={handleListClickSix}>
                    <ListItemText primary="Example 6" />
                    {openListItemSix ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openListItemSix} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemText>
                        Instruments featured in this example:
                      </ListItemText>
                      <ListItemText> - Snuffy</ListItemText>
                      <ListItemText> - Alumosprings</ListItemText>
                      <ListItemText> - Fuel baffle gong</ListItemText>
                      <ListItemText> - Junk on a stick</ListItemText>
                      <ListItemText> - Demi-globe bass drum</ListItemText>
                      <ListItemText> - Dervish Drums</ListItemText>
                      <ListItemText> - B52 drums</ListItemText>
                      <ListItemText> - Nails</ListItemText>
                      <ListItemText> - Malcolm voice</ListItemText>
                    </List>
                  </Collapse>
                </List>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Loops%2FSnuffy%20Loop%20-%20Mix%202.mp3?alt=media&token=87cd3f12-e656-4203-b4c1-812d4b0c70fa"
                  }
                  loop={true}
                  controls
                />
              </div>
            ) : null}

            {wagnerLoop ? (
              <div>
                <List>
                  <ListItem button onClick={handleListClickSeven}>
                    <ListItemText primary="Example 7" />
                    {openListItemSeven ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openListItemSeven} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemText>
                        Instruments featured in this example:
                      </ListItemText>
                      <ListItemText>The Eye</ListItemText>
                      <ListItemText>Alumobowls</ListItemText>
                      <ListItemText>Pippolini</ListItemText>
                      <ListItemText>Antlers</ListItemText>
                      <ListItemText>Delta</ListItemText>
                      <ListItemText>Exhaust fans</ListItemText>
                    </List>
                  </Collapse>
                </List>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Loops%2FWagner%20chord%20-%20App%20Mix%201.mp3?alt=media&token=e6b0aa4f-19ca-45d1-bffc-8b9a8a935c6f"
                  }
                  loop={true}
                  controls
                />
              </div>
            ) : null}

            {xylobeLoop ? (
              <div>
                <List>
                  <ListItem button onClick={handleListClickEight}>
                    <ListItemText primary="Example 8" />
                    {openListItemEight ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openListItemEight} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemText>
                        Instruments featured in this example:
                      </ListItemText>
                      <ListItemText>Xylobe</ListItemText>
                      <ListItemText>Pippolini</ListItemText>
                      <ListItemText>Delta</ListItemText>
                      <ListItemText>Fuel baffle gong</ListItemText>
                    </List>
                  </Collapse>
                </List>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Loops%2FXylobe%20Loop%20-%20App%20Mix%201.mp3?alt=media&token=f5b97472-1d07-4a7d-a1f5-43e0946da2c0"
                  }
                  loop={true}
                  controls
                />
              </div>
            ) : null}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          {body}

          <div>
            <div className="slide-container individualInstrumentGallery">
              <Slide>
                {findInstrumentData &&
                  findInstrumentData.instrument_imgURL.map((itemIMG) => {
                    return (
                      <div className="each-slide">
                        <div
                          style={{ backgroundImage: `url(${itemIMG})` }}
                        ></div>
                      </div>
                    );
                  })}
              </Slide>
            </div>
          </div>
        </TabPanel>
      </div>
    </div>
  );
}

export default DisplaySingleInstrument;
