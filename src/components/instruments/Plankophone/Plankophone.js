import React, { useState, useEffect } from "react";
import "./Plankophone.css";
import useSound from "use-sound";
import { CircularProgress } from "@material-ui/core";
import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function Plankophone({ instruments }) {
  const [findInstrumentData, setfindInstrumentData] = useState({});

  const [plankoOne, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPlankophone%2FAudio%2FPlankophone%20Note%201.mp3?alt=media&token=216dcc55-799d-447b-9ae2-2299e6bc9e70"
  );
  const [plankoTwo, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPlankophone%2FAudio%2FPlankophone%20Note%202.mp3?alt=media&token=3a347dd9-107b-4f32-9d8e-60fe51f55759"
  );
  const [plankoThree, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPlankophone%2FAudio%2FPlankophone%20Note%203.mp3?alt=media&token=c3658699-8738-475f-aae0-f5ff3013f1fd"
  );
  const [plankoFour, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPlankophone%2FAudio%2FPlankophone%20Note%204.mp3?alt=media&token=5b9203b8-0a72-4d01-85bb-fc5d96571d03"
  );
  const [plankoFive, { stop: stop4 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPlankophone%2FAudio%2FPlankophone%20Note%205.mp3?alt=media&token=7f6c84ed-d83f-4cd9-bf86-ff879610473c"
  );

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
      if (item.name.split(" ").join("") === "Plankophone") {
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
      <div className="plankophoneContainer">
        <img
          className="plankophone"
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        ></img>
        <div className="plankoButtons">
          <button className=" plankButton plankoButton1" onClick={plankoOne}>
            1
          </button>
          <button className="plankButton plankoButton2" onClick={plankoTwo}>
            2
          </button>
          <button className="plankButton plankoButton3" onClick={plankoThree}>
            3
          </button>
          <button className="plankButton plankoButton4" onClick={plankoFour}>
            4
          </button>
          <button className="plankButton plankoButton5" onClick={plankoFive}>
            5
          </button>
        </div>
      </div>
      <ZoomButtons instrumentName={"plankophone"}></ZoomButtons>
    </div>
  );
}
