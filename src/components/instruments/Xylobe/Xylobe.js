import React, { useState, useEffect } from "react";
import "./Xylobe.css";
import useSound from "use-sound";
import { CircularProgress } from "@material-ui/core";
import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function Xylobe({ instruments }) {
  const [xylobeC, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FXylobe%2FAudio%2FXylobe%20C%20plus%2040%EF%BF%BD-ScrapArts.mp3?alt=media&token=6bc746a9-5106-4c30-9917-d72e2210e54b"
  );

  const [xylobeF, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FXylobe%2FAudio%2FXylobe%20C%20plus%2040%EF%BF%BD-ScrapArts.mp3?alt=media&token=6bc746a9-5106-4c30-9917-d72e2210e54b"
  );

  const [xylobeG, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FXylobe%2FAudio%2FXylobe%20G%20sharp%2015-ScrapArts.mp3?alt=media&token=54b4230e-ba96-4cc8-b611-458a02836f53"
  );

  const [xylobeB, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FXylobe%2FAudio%2FXylobe_%20B%20high%2007-ScrapArts.mp3?alt=media&token=af1dfd01-913d-4c6d-8fce-c720f3059642"
  );

  const [xylobeE, { stop: stop4 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FXylobe%2FAudio%2FXylobe_%20E%20flat%2011-ScrapArts.mp3?alt=media&token=eb9da6c2-8ed1-414f-8fef-6db73fa43595"
  );
  const [findInstrumentData, setfindInstrumentData] = useState({});
  async function getData() {}

  useEffect(() => {
    return () => {
      stop();
      stop1();
      stop2();
      stop3();
      stop4();
    };
  }, [stop, stop1, stop2, stop3, stop4]);

  useEffect(() => {
    //gets our instrument matching the name of our desired instrument

    instruments.map((item) => {
      if (item.name.split(" ").join("") === "Xylobe") {
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
      <div className="xylobeContainer">
        <img
          className="xylobeIMG"
          src={
            require(`../../../Media/InstrumentProfileImg/Xylobe.jpg`).default
          }
          alt={findInstrumentData.name}
        ></img>
        <div className="buttonContainer">
          <button className="buttonLeft" onClick={xylobeC}></button>
          <button className="buttonRight" onClick={xylobeF}></button>
          <button className="buttonLeft" onClick={xylobeG}></button>
          <button className="buttonRight" onClick={xylobeB}></button>
          <button className="buttonLeft" onClick={xylobeE}></button>
        </div>
      </div>
      <ZoomButtons instrumentName={"xylobeIMG"}></ZoomButtons>
    </div>
  );
}
