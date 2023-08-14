import React, { useState, useEffect } from "react";
import "./Nonette.css";
import useSound from "use-sound";
import { CircularProgress } from "@material-ui/core";
import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function Nonette({ instruments }) {
  const [nonetteOne, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FNonette%2FAudio%2FNonette%201-ScrapArts.mp3?alt=media&token=7d5fd0e4-fe3a-4aaa-88bc-2a1bab3b5551"
  );
  const [nonetteTwo, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FNonette%2FAudio%2FNonette%202-ScrapArts.mp3?alt=media&token=4af15a1f-3fd0-4f8b-abd5-356aef558ae0"
  );
  const [nonetteThree, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FNonette%2FAudio%2FNonette%203-ScrapArts.mp3?alt=media&token=010786cb-232a-43ae-bc1d-08c489faff5e"
  );
  const [findInstrumentData, setfindInstrumentData] = useState({});

  useEffect(() => {
    return () => {
      stop();
      stop1();
      stop2();
    };
  }, [stop, stop1, stop2]);
  async function getData() {}
  //gets our instrument matching the name of our desired instrument

  useEffect(() => {
    instruments.map((item) => {
      if (item.name.split(" ").join("") === "Nonette") {
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

      <div className="nonettecontainer">
        <img
          className="nonette"
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        ></img>
        <div className="nonetteButton1">
          <button className="nonette1" onClick={nonetteOne}></button>
        </div>
        <div className="nonetteButton23">
          <button className="nonette2" onClick={nonetteTwo}></button>
          <button className="nonette3" onClick={nonetteThree}></button>
        </div>
      </div>
      <ZoomButtons instrumentName={"nonette"}></ZoomButtons>
    </div>
  );
}
