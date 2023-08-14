import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import "./Pippolini.css";
import { CircularProgress } from "@material-ui/core";
import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function Pippolini({ instruments }) {
  const [pipesGlisando] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPippolini%2FAudio%2FPipes%20Glisando%201-ScrapArts.mp3?alt=media&token=5ef37c11-3e8d-476a-ba50-bbda1495d959"
  );

  const [pipesPerfectGlis, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPippolini%2FAudio%2FPipes%20Perfect%20Glisando%201-ScrapArts.mp3?alt=media&token=0fd684d0-7850-474b-9ff0-3cdf7d7f9e01"
  );

  const [pipes15, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPippolini%2FAudio%2FPipes_15-ScrapArts.mp3?alt=media&token=5d95cd26-bc7f-402c-a781-456e2068859b"
  );

  const [pipes18, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPippolini%2FAudio%2FPipes_18-ScrapArts.mp3?alt=media&token=9d6e21d9-c011-4cb2-8dd7-d3bcba29a62d"
  );

  const [pipes19, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPippolini%2FAudio%2FPipes_19-ScrapArts.mp3?alt=media&token=4fe97d49-7578-4fcf-a74e-0f6c01e374c0"
  );

  const [pipes21, { stop: stop4 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPippolini%2FAudio%2FPipes_21-ScrapArts.mp3?alt=media&token=e6c5f87e-0f4a-4e84-8c2c-0321fbed8562"
  );

  const [pipes22, { stop: stop5 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FPippolini%2FAudio%2FPipes_22-ScrapArts.mp3?alt=media&token=12bfc190-65e6-49f8-b18e-c78cfeda627e"
  );

  const [findInstrumentData, setfindInstrumentData] = useState({});

  useEffect(() => {
    return () => {
      stop();
      stop1();
      stop2();
      stop3();
      stop4();
      stop5();
    };
  }, [stop, stop1, stop2, stop3, stop4, stop5]);

  async function getData() {}
  //gets our instrument matching the name of our desired instrument

  useEffect(() => {
    instruments.map((item) => {
      if (item.name.split(" ").join("") === "Pippolini") {
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
      <div className="pippoliniContainer">
        <img
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        ></img>
        <button
          className="pipesBtn pipesGlisando"
          onClick={pipesGlisando}
        ></button>
        <button
          className="pipesBtn pipesPerfectGlis"
          onClick={pipesPerfectGlis}
        ></button>
        <button className="pipesBtn pipes15" onClick={pipes15}></button>
        <button className="pipesBtn pipes18" onClick={pipes18}></button>
        <button className="pipesBtn pipes19" onClick={pipes19}></button>
        <button className="pipesBtn pipes21" onClick={pipes21}></button>
        <button className="pipesBtn pipes22" onClick={pipes22}></button>
      </div>
      <ZoomButtons instrumentName={"pippoliniContainer"}></ZoomButtons>
    </div>
  );
}
