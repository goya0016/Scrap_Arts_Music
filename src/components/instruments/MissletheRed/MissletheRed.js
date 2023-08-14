import React, { useState, useEffect } from "react";
import "./MissletheRed.css";
import useSound from "use-sound";
import { CircularProgress } from "@material-ui/core";
import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function MissletheRed({ instruments }) {
  const [missle1, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FMissile%20the%20Red%2FAudio%2FMissile%20Choke-ScrapArts.mp3?alt=media&token=2b2c29c0-bd1b-43e9-b45c-c8b13feb0dab"
  );
  const [missle2, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FMissile%20the%20Red%2FAudio%2FMissile-ScrapArts.mp3?alt=media&token=05b82801-b2fc-4caa-a867-18e7c6c458f8"
  );

  const [findInstrumentData, setfindInstrumentData] = useState({});

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
      if (item.name.split(" ").join("") === "MissletheRed") {
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
      <div className="missleRedContainer">
        <img
          className="missleTheRed"
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        ></img>
        <div>
          <button className="missleBtn1" onClick={missle1}></button>
          <button className="missleBtn2" onClick={missle2}></button>
        </div>
      </div>
      <ZoomButtons instrumentName={"missleTheRed"}></ZoomButtons>
    </div>
  );
}
