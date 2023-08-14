import React, { useState, useEffect } from "react";
import "./ZigguratDrum.css";
import useSound from "use-sound";
import { CircularProgress } from "@material-ui/core";
import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function ZigguratDrum({ instruments }) {
  const [ziggurat1, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FZiggurat%20Drum%2FAudio%2FZiggurat%201-ScrapArts.mp3?alt=media&token=848bf11b-155c-4e89-8485-262d60694d09"
  );
  const [ziggurat2, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FZiggurat%20Drum%2FAudio%2FZiggurat%202%20upsidedown-ScrapArts.mp3?alt=media&token=697bed00-32d8-41f6-830f-a926f6bf8b0c5"
  );
  const [ZigguratSuction, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FZiggurat%20Drum%2FAudio%2FZiggurat%201%20suction%20cup-ScrapArts.mp3?alt=media&token=17dbd9c8-f9dc-4d04-95fc-d56fefa9aec0"
  );
  const [ZigguratSwipe, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FZiggurat%20Drum%2FAudio%2FZiggurat%20swipe-ScrapArts.mp3?alt=media&token=2c131bfd-8127-4f34-8612-9d2a964ccf2f"
  );
  const [ZigguratUpside, { stop: stop4 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FZiggurat%20Drum%2FAudio%2FZiggurat%202%20upsidedown-ScrapArts.mp3?alt=media&token=697bed00-32d8-41f6-830f-a926f6bf8b0c"
  );
  const [findInstrumentData, setfindInstrumentData] = useState({});

  useEffect(() => {
    return () => {
      stop();
      stop1();
      stop2();
      stop3();
      stop4();
    };
  }, [stop, stop1, stop2, stop3, stop4]);

  async function getData() {}
  //gets our instrument matching the name of our desired instrument
  useEffect(() => {
    instruments.map((item) => {
      if (item.name.split(" ").join("") === "ZigguratDrum") {
        return setfindInstrumentData(item);
      }
      return console.error();
    });
    getData();
  }, [instruments]);

  //creates our viusalization for the user to click and play certain sounds that are imported from firebase storage.
  if (!findInstrumentData) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <div>
      <BackButton></BackButton>
      <div className="zigDrumContainer">
        <img
          className="zigguratDrum"
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        ></img>

        <div className="zigButtons123">
          <button className="zig2" onClick={ziggurat2}></button>
          <button className="zigSuction" onClick={ZigguratSuction}></button>
          <button className="zig1" onClick={ziggurat1}></button>
        </div>
        <div className="zigButtons45">
          <button className="zigSwipe" onClick={ZigguratSwipe}></button>
          <button className="zigUpside" onClick={ZigguratUpside}></button>
        </div>
      </div>
      <ZoomButtons instrumentName={"zigguratDrum"}></ZoomButtons>
    </div>
  );
}
