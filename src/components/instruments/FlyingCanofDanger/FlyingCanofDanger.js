import React, { useState, useEffect } from "react";
import "./FlyingCanofDanger.css";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import { FaArrowLeft } from "react-icons/fa";
import { CircularProgress } from "@material-ui/core";
import ZoomButton from "../../ZoomButtons/ZoomButton";

export default function FlyingCanofDanger({ instruments }) {
  const history = useHistory();

  const [findInstrumentData, setfindInstrumentData] = useState({});
  const [
    playCanSound,
    { stop },
  ] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FFlying%20Can%20of%20Danger%2FAudio%2FFlying%20Can-ScrapArts.mp3?alt=media&token=351a1411-004f-4fe3-b699-e6a4f9553e4e",
    { interrupt: true }
  );
  async function getData() {}
  //gets our instrument matching the name of our desired instrument

  //stop the music from playing when navigating to another page.
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  useEffect(() => {
    instruments.map((item) => {
      if (item.name.split(" ").join("") === "FlyingCanofDanger") {
        return setfindInstrumentData(item);
      }
      return console.error();
    });
    getData();
  }, [instruments]);

  //stops the instrument from playing when clicked
  const backToInstruments = () => {
    stop();
    history.push("/instruments");
  };

  //creates our viusalization for the user to click and play certain sounds that are imported from firebase storage.
  if (!findInstrumentData) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <div>
      <button className="instrumentBackButton" onClick={backToInstruments}>
        <FaArrowLeft
          style={{ "margin-right": 10, "margin-top": 2 }}
        ></FaArrowLeft>
        back
      </button>
      <div className="canContainer">
        <img
          className="dangerIMG"
          src={
            require(`../../../Media/InstrumentProfileImg/FlyingCanofDanger.jpg`)
              .default
          }
          alt={findInstrumentData.name}
        ></img>
        <button
          id="instrumentPlaying"
          className="canButton"
          onClick={playCanSound}
        ></button>
      </div>
      <ZoomButton instrumentName={"dangerIMG"}></ZoomButton>
    </div>
  );
}
