import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import "./Wall-EHorn.css";
import { CircularProgress } from "@material-ui/core";
import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function WallEHorn({ instruments }) {
  const [findInstrumentData, setfindInstrumentData] = useState({});
  const [hornOne, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FWall-E%20Horn%2FAudio%2FWally%20Horns%201-ScrapArts.mp3?alt=media&token=e22cfc1b-2467-4db1-a8de-fd729fec89fc"
  );
  const [hornTwo, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FWall-E%20Horn%2FAudio%2FWally%20Horns%202-ScrapArts.mp3?alt=media&token=4b99ee71-843e-4adf-936b-960b72eab62f"
  );
  const [hornThree, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FWall-E%20Horn%2FAudio%2FWally%20Horns%203-ScrapArts.mp3?alt=media&token=49079183-8a8a-4d29-9d69-4644fdeb6691"
  );
  async function getData() {}

  useEffect(() => {
    return () => {
      stop();
      stop1();
      stop2();
    };
  }, [stop, stop1, stop2]);
  //gets our instrument matching the name of our desired instrument
  useEffect(() => {
    instruments.map((item) => {
      if (item.name.split(" ").join("") === "Wall-EHorn") {
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
      <div className="wallEContainer">
        <img
          className="wallEHorn"
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        ></img>
        <div className="hornButtons">
          <button className="hornOne" onClick={hornOne}></button>
          <button className="hornTwo" onClick={hornTwo}></button>
          <button className="hornThree" onClick={hornThree}></button>
        </div>
      </div>
      <ZoomButtons instrumentName={"wallEHorn"}></ZoomButtons>
    </div>
  );
}
