import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Bio.css";

export default function Bio({ creatorBio, scrapCreatorBio }) {
  const { creatorName } = useParams();
  const [currentCreator, setCurrentCreator] = useState();
  const [currentCreatorBio, setCurrentCreatorBio] = useState();
  window.scrollTo(0, 0);

  //function to get our data
  //matches our params and gets data for the correct user
  //sets data in state
  useEffect(() => {
    const runLocalStorage = (currentCreator) => {
      if (!currentCreator) {
        let scrap = JSON.parse(localStorage.getItem("webscraping"));
        setCurrentCreator(scrap.info[`${creatorName}, Canadian`]);
      }
      if (!creatorBio) {
        setCurrentCreatorBio(JSON.parse(localStorage.getItem("sam_bio")));
      } else {
        setCurrentCreatorBio(creatorBio);
      }

      return;
    };
    runLocalStorage();
  }, [creatorBio, creatorName]);

  //checks our scrapCreatorBio
  //loops through and checks if the names are the same we will
  //set our current creator info to the correct one to be displayed
  useEffect(() => {
    if (scrapCreatorBio) {
      creatorBio.map((item) => {
        if (item.bio_name === creatorName) {
          setCurrentCreator(scrapCreatorBio.info[`${creatorName}, Canadian`]);
          setCurrentCreatorBio(item);
        }
        return console.error;
      });
    }
  }, [scrapCreatorBio, creatorBio, creatorName]);

  //displays loading screen if our creator state is undefined.
  //if currentCreator is not undefined, displays the information.
  if (!currentCreator) {
    return <CircularProgress></CircularProgress>;
  }
  return (
    <div className="creatorPage">
      <h4 className="creatorName">{currentCreatorBio.bio_name}</h4>
      <h6 className="creatorRole">{currentCreatorBio.bio_role}</h6>
      <img
        className="creatorImg"
        src={currentCreatorBio.bio_profile_picture}
        alt={currentCreatorBio.bio_name}
      ></img>

      <div className="bioItemContainer">
        {currentCreator.map((item, i) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}
