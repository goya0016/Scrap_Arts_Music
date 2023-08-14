import React, { useState, useEffect } from "react";
import BackButton from "../../BackButton/BackButton";
import "./Antlers.css";
import useSound from "use-sound";
import ZoomButtons from "../../ZoomButtons/ZoomButton";
import { CircularProgress } from "@material-ui/core";

export default function Antlers({ instruments }) {
  const [aflat, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FAntlers%2FAudio%2FAntlers%205%20-%206.wav%20A%20flat%20minus%2010%EF%BF%BD-ScrapArts.mp3?alt=media&token=65a87c2e-7de5-4516-82c2-2141aee43f31"
  );

  const [anatural, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FAntlers%2FAudio%2FAntlers%205%20-%203.wav%20A%20natural-ScrapArts.mp3?alt=media&token=04c80c02-8872-4338-b29b-bccdf9eb9e1b"
  );

  const [bflat, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FAntlers%2FAudio%2FAntlers%205%20-%204.wav%20B%20flat%20minus%2020%EF%BF%BD-ScrapArts.mp3?alt=media&token=eb44594c-a4c0-4598-8e97-55502f4aaae0"
  );

  const [csharp, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FAntlers%2FAudio%2FAntlers%204%20-1.wav%20C%20sharp%20plus%2045%EF%BF%BD-ScrapArts.mp3?alt=media&token=37c25783-14fe-4989-aab6-2b7682280d0f"
  );

  const [enatural, { stop: stop4 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FAntlers%2FAudio%2FAntlers%207%20-%204.wav%20E%20natural-ScrapArts.mp3?alt=media&token=83c63b25-cecd-4378-89a9-a7a7431ed157"
  );

  const [fsharp, { stop: stop5 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FAntlers%2FAudio%2FAntlers%204%20-%205.wav%20F%20sharp%20plus%2025%EF%BF%BD-ScrapArts.mp3?alt=media&token=9e12b77e-81b7-429b-a14c-01f25613bcd7"
  );

  const [bell, { stop: stop6 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FAntlers%2FAudio%2FAntlers%205%20-%20Sus%20bell.wav%20A%20to%20E-ScrapArts.mp3?alt=media&token=79e082f0-f6cd-41f8-8bab-fddda48fc6fe"
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
      stop6();
    };
  }, [stop, stop1, stop2, stop3, stop4, stop5, stop6]);

  async function getData() {}
  //gets our instrument matching the name of our desired instrument

  useEffect(() => {
    instruments.map((item) => {
      if (item.name.split(" ").join("") === "Antlers") {
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
    <div className="antlersContainer">
      <BackButton></BackButton>
      <img
        className="antlers"
        src={findInstrumentData.instrument_profile_picture}
        alt={findInstrumentData.name}
      ></img>
      <ZoomButtons instrumentName={"antlers"}></ZoomButtons>
      <div>
        <button className="aflat" onClick={aflat}>
          A1
        </button>
      </div>

      <div>
        <button className="a" onClick={anatural}>
          A
        </button>
      </div>

      <div>
        <button className="bflat" onClick={bflat}>
          B1
        </button>
      </div>

      <div>
        <button className="csharp" onClick={csharp}>
          C#
        </button>
      </div>

      <div>
        <button className="E" onClick={enatural}>
          E
        </button>
      </div>

      <div>
        <button className="f" onClick={fsharp}>
          F
        </button>
      </div>

      <div>
        <button className="bell" onClick={bell}>
          Bell
        </button>
      </div>
    </div>
  );
}
