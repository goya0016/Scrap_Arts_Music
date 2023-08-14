import React, { useState } from "react";
import { FaCompressAlt, FaExpandAlt } from "react-icons/fa";

export default function ZoomButton({ instrumentName }) {
  const [zoomButtonValue, setZoomButtonValue] = useState(true);

  //takes in instrument name
  //gets the img div container
  //adds scale to img container
  //change button to zoomout
  const zoomButton = () => {
    let currentIMG = document.getElementsByClassName(instrumentName);
    currentIMG[0].style.transform = "scale(2.0)";
    setZoomButtonValue(false);
  };

  //takes in instrument name
  //gets the img div container
  //removes scale to img container
  //change button to in
  const zoomOutButton = () => {
    console.log("zoom out button");
    let currentIMG = document.getElementsByClassName(instrumentName);
    currentIMG[0].removeAttribute("style");
    setZoomButtonValue(true);
  };

  if (!instrumentName) {
    return null;
  } else {
    return (
      <div>
        {!zoomButtonValue ? (
          <button className="instrumentZoomButton" onClick={zoomOutButton}>
            <FaCompressAlt></FaCompressAlt>
          </button>
        ) : (
          <button className="instrumentZoomButton" onClick={zoomButton}>
            <FaExpandAlt></FaExpandAlt>
          </button>
        )}
      </div>
    );
  }
}
