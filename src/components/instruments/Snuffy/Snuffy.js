import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import "./Snuffy.css";

import loadable from "@loadable/component";
const BackButton = loadable(() => import("../../BackButton/BackButton"));
const ZoomButtons = loadable(() => import("../../ZoomButtons/ZoomButton"));

export default function Snuffy({ instruments }) {
  const [snuffy1] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FSnuffy%2FAudio%2FSnuffy%201-ScrapArts.mp3?alt=media&token=5fb546a5-7b54-4843-80a1-463bdff0f6b9"
  );

  const [snuffy5] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FSnuffy%2FAudio%2FSnuffy%205-ScrapArts.mp3?alt=media&token=53320a29-c1e3-412c-83fd-34be588bc019"
  );

  const [snuffy7] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FSnuffy%2FAudio%2FSnuffy%207-ScrapArts.mp3?alt=media&token=0b16a05b-c784-45fd-9ebc-bd66677a7698"
  );

  const [snuffy11] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FSnuffy%2FAudio%2FSnuffy%2011-ScrapArts.mp3?alt=media&token=cfbb3200-dc95-4a4a-be38-c8d64ed129dc"
  );

  const [snuffyOnConcrete, { stop }] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/test-21f91.appspot.com/o/Instruments%2FSnuffy%2FAudio%2FSnuffy%20on%20Concrete-ScrapArts.mp3?alt=media&token=a7f36b2b-0748-4851-aada-2689c8ee0e5a"
  );

  const [findInstrumentData, setfindInstrumentData] = useState({});

  //stop the music from playing when navigating to another page.
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  async function getData() {}
  //gets our instrument matching the name of our desired instrument

  useEffect(() => {
    instruments.map((item) => {
      if (item.name.split(" ").join("") === "Snuffy") {
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
    <div className="snuffyContainer">
      <BackButton></BackButton>
      <img
        src={findInstrumentData.instrument_profile_picture}
        alt={findInstrumentData.name}
      />
      <button className="snuffyBtn snuffy1" onClick={snuffy1}></button>
      <button className="snuffyBtn snuffy5" onClick={snuffy5}></button>
      <button className="snuffyBtn snuffy7" onClick={snuffy7}></button>
      <button className="snuffyBtn snuffy11" onClick={snuffy11}></button>
      <button
        className="snuffyBtn snuffyConcrete"
        onClick={snuffyOnConcrete}
      ></button>
      <ZoomButtons></ZoomButtons>
    </div>
  );
}
