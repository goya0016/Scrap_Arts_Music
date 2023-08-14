import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import BackButton from "../../BackButton/BackButton";
import ZoomButton from "../../ZoomButtons/ZoomButton";
import "./DervishDrums.css";
export default function DervishDrums({ instruments }) {
  const [dervishOne, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FDervish%20Drums%2FAudio%2FDervish%20Flam-ScrapArts.mp3?alt=media&token=b675deaf-3861-46ec-ae3d-b5655383c124"
  );
  const [dervishTwo, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FDervish%20Drums%2FAudio%2FDervish%20Head%201-ScrapArts.mp3?alt=media&token=b1e311b5-5ff1-40fb-ba01-14c1a51e1a3d"
  );
  const [dervishThree, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FDervish%20Drums%2FAudio%2FDervish%20Head%202-ScrapArts.mp3?alt=media&token=1327ae4e-b0c6-42b7-b932-afbb92c70daa"
  );
  const [dervishLowOne, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FDervish%20Drums%2FAudio%2FDervish%20Low%20Shell%201-ScrapArts.mp3?alt=media&token=d0820ee9-4227-47c1-a169-790059a3b056"
  );
  const [dervishLowTwo, { stop: stop4 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FDervish%20Drums%2FAudio%2FDervish%20Low%20Shell%202-ScrapArts.mp3?alt=media&token=460b8a90-b80b-4a86-887a-7b1c27639141"
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
      if (item.name.split(" ").join("") === "DervishDrums") {
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
      <div className="dervishContainer">
        <img
          className="dervishDrums"
          src={
            require("../../../Media/InstrumentProfileImg/DervishDrums.jpg")
              .default
          }
          alt={findInstrumentData.name}
        ></img>

        <div className="dervishButtonContqainer">
          <div className="dervishButtonOne">
            <button className="dervishButton" onClick={dervishOne}></button>
            <button className="dervishButton" onClick={dervishTwo}></button>
            <button className="dervishButton" onClick={dervishThree}></button>
          </div>

          <div className="dervishButtonTwo">
            <button className="dervishButton" onClick={dervishLowOne}></button>
            <button className="dervishButton" onClick={dervishLowTwo}></button>
          </div>
        </div>
      </div>
      <ZoomButton instrumentName={"dervishDrums"}></ZoomButton>
    </div>
  );
}
