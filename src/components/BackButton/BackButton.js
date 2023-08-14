import React from "react";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const history = useHistory();

  //pushes the user back to the instrument page
  const backToInstruments = () => {
    history.push("/instruments");
  };

  return (
    <div style={{ display: "list-item" }}>
      <button className="instrumentBackButton" onClick={backToInstruments}>
        <FaArrowLeft
          style={{ "margin-right": 10, "margin-top": 2 }}
        ></FaArrowLeft>
        back
      </button>
    </div>
  );
}
