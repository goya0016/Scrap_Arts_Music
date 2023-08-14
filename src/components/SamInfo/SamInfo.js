import { CircularProgress } from "@material-ui/core";
import React from "react";
import "./SamInfo.css";

export default function SamInfo({ comInfo }) {
  if (!comInfo) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <div>
      {comInfo.map((item) => (
        <div>
          <div className="comHeading">
            <h2 className="comName"> {item.com_name} </h2>
            <p className="subHeading"> Our Latest Production </p>
          </div>
          <img
            className="com"
            src={item.com_picture}
            alt={item.com_picture}
          ></img>
          <p className="samInfoComAbout"> {item.com_about} </p>
        </div>
      ))}
    </div>
  );
}
