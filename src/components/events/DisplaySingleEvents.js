import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon } from "react-share";
import "./DisplaySingleEvents.css";
//passing in our event prop to be used to render onto the page.
function DisplaySingleEvents({ events }) {
  //grabs the event name from our params
  const { eventName } = useParams();
  const [currentEvent, setCurrentEvent] = useState();

  //get the current event name that is clicked and matches it with the events item
  //store that event's object inside our state
  async function getData() {}
  useEffect(() => {
    events.map((item) => {
      if (item.Event === eventName) {
        setCurrentEvent(item);
      }
      return console.error();
    });
    getData();
  }, [eventName, events]);

  if (!currentEvent) {
    return <div>LOADING</div>;
  }
  return (
    <div>
      <div>{currentEvent.Event}</div>
      <p>this is the events c;</p>
      <div>
        <FacebookShareButton url={currentEvent.Share}>
          <FacebookIcon size={32} round={true}></FacebookIcon>
        </FacebookShareButton>

        <TwitterShareButton url={currentEvent.Share}>
          <TwitterIcon size={32} round={true}></TwitterIcon>
        </TwitterShareButton>

        <PinterestShareButton url={currentEvent.Share}>
          <PinterestIcon size={32} round={true}></PinterestIcon>
        </PinterestShareButton>

        <TumblrShareButton url={currentEvent.Share}>
          <TumblrIcon size={32} round={true}></TumblrIcon>
        </TumblrShareButton>

        <LinkedinShareButton url={currentEvent.Share}>
          <LinkedinIcon size={32} round={true}></LinkedinIcon>
        </LinkedinShareButton>
      </div>
    </div>
  );
}

export default DisplaySingleEvents;
