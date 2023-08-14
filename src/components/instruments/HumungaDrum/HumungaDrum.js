import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import useSound from "use-sound";
import "./HumungaDrum.css";
import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function HumungaDrum({ instruments }) {
  const [findInstrumentData, setfindInstrumentData] = useState({});

  const [drumRim, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FHumunga%20Drum%2FAudio%2FHumunga%201%20rim%20shot-ScrapArts.mp3?alt=media&token=44a2b9b1-9381-49fb-b4d5-d73d1eb44799"
  );
  const [drumShell, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FHumunga%20Drum%2FAudio%2FHumunga%201%20shell%20hit-ScrapArts.mp3?alt=media&token=8d2de299-71f1-46d6-8bc2-56caab0ef0b4"
  );
  const [drumSuctionCup, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FHumunga%20Drum%2FAudio%2FHumunga%201%20suction%20cup-ScrapArts.mp3?alt=media&token=b9197f77-5439-44d6-93cb-9df0cbd4bdb4"
  );
  const [drum, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FHumunga%20Drum%2FAudio%2FHumunga%201-ScrapArts.mp3?alt=media&token=3f4a2a9c-e007-41fc-852c-7c2363622983"
  );
  async function getData() {}
  //gets our instrument matching the name of our desired instrument

  useEffect(() => {
    return () => {
      stop();
      stop1();
      stop2();
      stop3();
    };
  }, [stop, stop1, stop2, stop3]);

  useEffect(() => {
    instruments.map((item) => {
      if (item.name.split(" ").join("") === "HumungaDrum") {
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
      <div className="humDrumContainer">
        <img
          className="humungaDrum"
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        ></img>
        <div className="drumButtons">
          <button className="drumRim" onClick={drumRim}></button>
          <button className="drumShell" onClick={drumShell}></button>
          <button className="drumSuctionCup" onClick={drumSuctionCup}></button>
          <button className="drum" onClick={drum}></button>
        </div>
      </div>
      <ZoomButtons instrumentName={"humungaDrum"}></ZoomButtons>
    </div>
  );
}
