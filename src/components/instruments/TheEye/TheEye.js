import React, { useState, useEffect } from "react";
import "./TheEye.css";
import useSound from "use-sound";
import loadable from "@loadable/component";
import { CircularProgress } from "@material-ui/core";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function TheEye({ instruments }) {
  const [bnatural, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Eye%2FAudio%2FThe%20Eye%20-%201.wav%20B%20natural-ScrapArts.mp3?alt=media&token=b594fdd3-20a8-4f1a-964e-4cce24a6af6d"
  );

  const [csharp, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Eye%2FAudio%2FThe%20Eye%20-%205%20(1).wav%20C%20sharp-ScrapArts.mp3?alt=media&token=1fe0cf0c-44bd-4a9d-a1b3-27b01984dd1b"
  );

  const [dsharp, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Eye%2FAudio%2FThe%20Eye%20-%206A.wav%20D-ScrapArts.mp3?alt=media&token=1d5be6d1-d514-47ef-b180-c6eba6ee9283"
  );

  const [enatural, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Eye%2FAudio%2FThe%20Eye%20-%203.wav%20E%20natural-ScrapArts.mp3?alt=media&token=78f62513-add9-4fa8-8043-eba7972c2bc0"
  );

  const [gliss, { stop: stop4 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Eye%2FAudio%2FThe%20Eye%20-%20Gliss%20choir%20in%20E%204-ScrapArts.mp3?alt=media&token=7eab17b0-9583-4853-989a-bf22a43e8ec0"
  );

  //stop the music from playing when navigating to another page.
  useEffect(() => {
    return () => {
      stop();
      stop1();
      stop2();
      stop3();
      stop4();
    };
  }, [stop, stop1, stop2, stop3, stop4]);

  const [findInstrumentData, setfindInstrumentData] = useState({});

  async function getData() {}
  useEffect(() => {
    //gets our instrument matching the name of our desired instrument

    instruments.map((item) => {
      if (item.name.split(" ").join("") === "TheEye") {
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
      <div className="eyeContainer">
        <img
          className="theEye"
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        ></img>
        <div>
          <button className="b" onClick={bnatural}>
            B
          </button>
        </div>

        <div>
          <button className="c" onClick={csharp}>
            C#
          </button>
        </div>

        <div>
          <button className="d" onClick={dsharp}>
            D#
          </button>
        </div>

        <div>
          <button className="e" onClick={enatural}>
            E
          </button>
        </div>

        <div>
          <button className="gliss" onClick={gliss}>
            G
          </button>
        </div>
      </div>
      <ZoomButtons instrumentName={"theEye"}></ZoomButtons>
    </div>
  );
}
