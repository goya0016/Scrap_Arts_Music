import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import "./TheMojo.css";
import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function TheEye({ instruments }) {
  const [mojo_1, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Mojo%2FAudio%2FMojo1.mp3?alt=media&token=2e25aed5-6905-45ab-9e3b-31486493a5a9"
  );
  const [mojo_2, { stop: stop1 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Mojo%2FAudio%2FMojo2.mp3?alt=media&token=7ab91f5b-2bd4-4de6-a92d-8e9417b215f9"
  );
  const [mojo_3, { stop: stop2 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Mojo%2FAudio%2FMojo3.mp3?alt=media&token=562c0b31-d850-4c97-9311-ad01345c4355"
  );
  const [mojo_4, { stop: stop3 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Mojo%2FAudio%2FMojo4.mp3?alt=media&token=d56842cd-d2af-4c01-a2b5-52844e023324"
  );
  const [mojo_5, { stop: stop4 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Mojo%2FAudio%2FMojo5.mp3?alt=media&token=cf802755-e6ed-4eac-a335-5727ff02a4c9"
  );
  const [mojo_6, { stop: stop5 }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FThe%20Mojo%2FAudio%2FMojo6.mp3?alt=media&token=1301bd80-6996-4782-bb04-399f9a268950"
  );

  const [findInstrumentData, setfindInstrumentData] = useState({});

  //stop the music from playing when navigating to another page.
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
      if (item.name.split(" ").join("") === "TheMojo") {
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
      <div className="mojoContainer">
        <img
          className="theMojo"
          src={findInstrumentData.instrument_profile_picture}
          alt={findInstrumentData.name}
        ></img>
        <div>
          <div>
            <button className="mojo1" onClick={mojo_1}>
              1
            </button>
          </div>
          <div>
            <button className="mojo2" onClick={mojo_2}>
              2
            </button>
          </div>
          <div>
            <button className="mojo3" onClick={mojo_3}>
              3
            </button>
          </div>
          <div>
            <button className="mojo4" onClick={mojo_4}>
              4
            </button>
          </div>

          <div>
            <button className="mojo5" onClick={mojo_5}>
              5
            </button>
          </div>

          <div>
            <button className="mojo6" onClick={mojo_6}>
              6
            </button>
          </div>
        </div>
      </div>
      <ZoomButtons instrumentName={"theMojo"}></ZoomButtons>
    </div>
  );
}
