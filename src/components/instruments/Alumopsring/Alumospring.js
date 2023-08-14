import React, { useState, useEffect } from "react";
import "./Alumospring.css";
import useSound from "use-sound";
import { CircularProgress } from "@material-ui/core";

import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function Alumospring({ instruments }) {
  const [alumospringLeft, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FAlumopsring%2FAudio%2FAlumospring%20solid%20-ScrapArts.mp3?alt=media&token=c83ad751-1d5f-4432-98f3-24301f28e615"
  );
  const [alumospringRight, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FAlumopsring%2FAudio%2FAlumospring%20solid%20-ScrapArts.mp3?alt=media&token=c83ad751-1d5f-4432-98f3-24301f28e615"
  );
  const [findInstrumentData, setfindInstrumentData] = useState({});

  //stop the music from playing when navigating to another page.
  useEffect(() => {
    return () => {
      stop();
      stop1();
    };
  }, [stop, stop1]);

  async function getData() {}
  //gets our instrument matching the name of our desired instrument

  useEffect(() => {
    instruments.map((item) => {
      if (item.name.split(" ").join("") === "Alumospring") {
        return setfindInstrumentData(item);
      }
      return null;
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
      <div style={{ overflow: "hidden" }}>
        <img
          className="alumospringImg"
          src={`../../../Media/InstrumentProfileImg/Alumospring.jpg`}
          alt={findInstrumentData.name}
        ></img>
        <ZoomButtons instrumentName={"alumospringImg"}></ZoomButtons>
      </div>
      <div></div>
      <div className="alumospringButtons">
        <button className="AlumoLeftButton" onClick={alumospringLeft}></button>
        <button
          className="AlumoRightButton"
          onClick={alumospringRight}
        ></button>
      </div>
    </div>
  );
}
