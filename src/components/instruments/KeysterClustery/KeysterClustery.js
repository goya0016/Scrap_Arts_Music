import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import "./KeysterClustery.css";
import BackButton from "../../BackButton/BackButton";
import ZoomButtons from "../../ZoomButtons/ZoomButton";

export default function KeysterClustery({ instruments }) {
  const [clusteryEFlat, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FKeyster%20Clustery%2FAudio%2FClustery%20E%20flat-ScrapArts.mp3?alt=media&token=55886908-04d0-4c8e-acb6-bed808cbf080"
  );

  const [clusteryA, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FKeyster%20Clustery%2FAudio%2FClustery_%20A%20flat%2002-ScrapArts.mp3?alt=media&token=f08a70d5-bf7b-45df-8794-07cf6c1b9ed5"
  );

  const [clusteryE, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FKeyster%20Clustery%2FAudio%2FClustery_%20%20E%2006-ScrapArts.mp3?alt=media&token=0e987435-2f78-4787-9814-547e9302a9ed"
  );

  const [clusteryShellR, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FKeyster%20Clustery%2FAudio%2FClustery%20SHELL%202%20A%20%2002-ScrapArts.mp3?alt=media&token=86c15e7d-c041-45aa-889c-98e68cee5a25"
  );

  const [clusteryShellL, { stop: stop4 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FKeyster%20Clustery%2FAudio%2FClustery%20SHELL%201%20%20F%20-ScrapArts.mp3?alt=media&token=cfcc9ca8-62bf-4a76-ad4b-567617f2af50"
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
      if (item.name.split(" ").join("") === "KeysterClustery") {
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
      <div className="buttonss">
        <BackButton></BackButton>
      </div>
      <div className="keysterClusteryContainer">
        <img
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        />
        <button
          className="keyBtn clusteryEFlat"
          onClick={clusteryEFlat}
        ></button>
        <button className="keyBtn clusteryA" onClick={clusteryA}></button>
        <button className="keyBtn clusteryE" onClick={clusteryE}></button>
        <button
          className="keyBtn clusteryShellR"
          onClick={clusteryShellR}
        ></button>
        <button
          className="keyBtn clusteryShellL"
          onClick={clusteryShellL}
        ></button>
      </div>
      <ZoomButtons
        className="buttonss"
        instrumentName={"keysterClusteryContainer"}
      ></ZoomButtons>
    </div>
  );
}
