import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Event.css";

//take in event props
// and displays it out on the page.
function Events({ events }) {
  if (!events) {
    return <CircularProgress></CircularProgress>;
  } else {
    return (
      <>
        <div>
          {events.map((list, i) => (
            <>
              <div className="eventBorder">
                <p> {JSON.stringify(list.Event)} </p>
                <p> {JSON.stringify(list.Date)} </p>
                <p> {JSON.stringify(list.Location)} </p>
                <p> {JSON.stringify(list.Share)} </p>

                <Link to={`/events/${list.Event}`}>About Event</Link>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}

export default Events;
