import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";

//icons
import { MdLocationOn } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsArrowRight } from "react-icons/bs";


//material UI components
import Button from '@material-ui/core/Button';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

import "react-toastify/dist/ReactToastify.css";
//For mobile
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    color: "black",
    width: "47vw",
  },
}));

const Home = ({ events, user, creatorBio, com, scrapCreatorBio }) => {
  //For mobile
  const matchesToMaxWidth = useMediaQuery("(max-width)");
  const [open, setOpen] = useState(false);
  const [clickedEvent, setClickedEvent] = useState();
  const [copyShare, setCopyShare] = useState({ value: "", copied: false });
  const [scrapArtInfo, setScrapArtsInfo] = useState();

  const classes = useStyles();
  let selected;
  const modalOpen = (ev) => {
    ev.preventDefault(ev); //prevent the default state
    //change the setOpen to True
    //condition to set the state for the modal
    if (open === true) {
      if (ev.target.className === "closeBtn") {
        console.log(copyShare);
        setOpen(false);
      }
    } else if (open !== true) {
      BodyText(ev);
      setOpen(true);
    }
  };

  useEffect(() => {
    if (!scrapCreatorBio) {
      let scrap = JSON.parse(localStorage.getItem("webscraping"));
      if (scrap != null) {
        setScrapArtsInfo(scrap.info[`About "Scrap Arts Music"`]);
      }
      return;
    } else {
      setScrapArtsInfo(scrapCreatorBio.info[`About "Scrap Arts Music"`]);
    }
    return;
  }, [scrapCreatorBio]);

  let body = SetData();

  //Start Pop-Up window (modal)
  //if the clickedEvent empty we prompt loading
  //if not empty display our modal
  function BodyText(ev) {
    console.log(ev);
    if (ev === undefined) {
    } else {
      let clicked = ev.target;
      let itwem = clicked.closest("[id]");
      let iid = itwem.getAttribute("id");
      console.log(iid);
      // let id = parseInt(item.getAttribute("data-target-id"));
      events.map((item) => {
        if (item.Event === iid) {
          console.log(item.Event);
          // console.log(ev.id);
          selected = item;
          // BodyText();
        }
        return null;
      });
      setClickedEvent(selected);
    }
  }
  //end Pop-Up window (modal)
  function SetData() {
    // BodyText();
    if (!clickedEvent) {
      //set body to "loading div"
      return <CircularProgress></CircularProgress>;
      // modalOpen();
    } else if (clickedEvent) {
      return (
        <div className="response">
          <div className={classes.paper}>
            <h5> {clickedEvent.Event} </h5>
            <p>
              <MdLocationOn /> {clickedEvent.Location}
            </p>
            <p>
              <IoTime /> {clickedEvent.Date}
            </p>
            <p className="iconsP">
              <span> Share:</span>
              <FacebookShareButton
                url={clickedEvent.Share}
                className="shareIcons"
              >
                <FacebookIcon size={35} round={true}></FacebookIcon>
              </FacebookShareButton>
              <TwitterShareButton url={clickedEvent.Share}>
                <TwitterIcon
                  size={35}
                  round={true}
                  className="shareIcons"
                ></TwitterIcon>
              </TwitterShareButton>
              <EmailShareButton url={clickedEvent.Share}>
                <EmailIcon
                  size={35}
                  round={true}
                  className="shareIcons"
                ></EmailIcon>
              </EmailShareButton>
            </p>
            <p className="shareLink"> Or copy and share this link:</p>
            <CopyToClipboard
              text={clickedEvent.Share}
              onCopy={() => setCopyShare({ copied: true })}
            >
              <Button variant="contained" className="linkBtn">
                  Copy Link
              </Button>
            </CopyToClipboard>
          </div>
          <button className="closeBtn">Close</button>
        </div>
      );
    }
  }
  //if the user is not logged in
  //display this information
  if (!user) {
    return (
      <React.Fragment>
        <h5 className="homeNavTitle">HOME</h5>
        <div className="homeContentContainer">
          <div>
            {com ? (
              <Link to={`/about_com`}>
                <div>
                  {com.map((item, i) => (
                    <div key={i}>
                      <p className="comAbout"> {"Our latest production"}</p>
                      <div className="comContainer">
                        <img
                          className="com"
                          src={item.com_picture}
                          alt={item.com_picture}
                        ></img>
                        <p className="comLearnMore">
                          {`Learn more`} <BsArrowRight />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            ) : (
              <CircularProgress></CircularProgress>
            )}
          </div>
          <h5 className="upEvents"> Upcoming Events </h5>
          <div className="allEventsBorder">
            {events ? (
              <div className={classes.root}>
                {matchesToMaxWidth ? (
                  <CircularProgress></CircularProgress>
                ) : (
                  <div className="allEventsBorder">
                    {events.map((item, i) => (
                      <div key={i} className="allEvents" onClick={modalOpen}>
                        <div className="eventInfo" id={item.Event}>
                          <div className="eventDate">
                            <p className="eventDay">
                              {item.Date.split(" ")[0].replace(",", "")}
                            </p>
                            <p className="eventNum">
                              {item.Date.split(" ")[2].replace(",", "")}
                            </p>
                          </div>
                          <div className="eventItem"> {item.Event} </div>
                          <Dialog
                            open={open}
                            onClick={() => {
                              // setOpen(false);
                              console.log("open");
                            }}
                          >
                            <DialogContent className="eventModal">
                              {body}
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <CircularProgress></CircularProgress>
            )}
          </div>
          <div className="informationContainer">
            <div className="creatorsInfo">
              {scrapArtInfo ? (
                <div>
                  <h6 className="aboutSAM1">About Scrap Arts Music</h6>
                  {scrapArtInfo.map((item, i) => (
                    <div key={i}>
                      <p className="infoText">{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
              {creatorBio ? (
                <div className="bios">
                  {creatorBio.map((item, i) => (
                    <Link key={i} to={`/creator_information/${item.bio_name}`}>
                      <div className="eachBio">
                        <div>
                          <img
                            className="bioImg"
                            src={item.bio_profile_picture}
                            alt={item.bio_name}
                          ></img>
                          <p className="creatorName"> {item.bio_name} </p>
                        </div>
                        {matchesToMaxWidth ? (
                          <p> {item.bio_about_me} </p>
                        ) : (
                          <></>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <CircularProgress></CircularProgress>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  if (!creatorBio && !events && !com) {
    return (
      <div>
        <CircularProgress></CircularProgress>
      </div>
    );
  }
  return (
    <div className="homeContentContainer">
      <h5 className="homeNavTitle">HOME</h5>

      <div>
        {com ? (
          <Link to={`/about_com`}>
            <div>
              {com.map((item, i) => (
                <div key={i}>
                  <p className="comAbout"> Our latest Production </p>
                  <div className="comContainer">
                    <img
                      className="com"
                      src={item.com_picture}
                      alt={item.com_picture}
                    ></img>
                    <p className="comLearnMore">{`learn more`}</p>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        ) : (
          <CircularProgress></CircularProgress>
        )}
      </div>

      <h5 className="upEvents"> Upcoming Events </h5>
      <div className="allEventsBorder">
        {events ? (
          <div className={classes.root}>
            {matchesToMaxWidth ? (
              <CircularProgress></CircularProgress>
            ) : (
              <div className="allEventsBorder">
                {events.map((item, i) => (
                  <div key={i} className="allEvents" onClick={modalOpen}>
                    <div className="eventInfo" id={item.Event}>
                      <div className="eventDate">
                        <p className="eventDay">
                          {item.Date.split(" ")[0].replace(",", "")}
                        </p>
                        <p className="eventNum">
                          {item.Date.split(" ")[2].replace(",", "")}
                        </p>
                      </div>
                      <p className="eventItem"> {item.Event} </p>
                      <Dialog
                        open={open}
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <DialogContent>
                          {body}
                          <DialogActions>
                            <div className="outer">
                              <div className="inner" onClick={(ev) => {}}>
                                <label className="closelbl">Close</label>
                              </div>
                            </div>
                          </DialogActions>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <CircularProgress></CircularProgress>
        )}
      </div>
      <div className="informationContainer">
        <div className="creatorsInfo">
          {scrapArtInfo ? (
            <div>
              <h6 className="aboutSAM">About Scrap Arts Music</h6>
              {scrapArtInfo.map((item, i) => (
                <div key={i}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
          {creatorBio ? (
            <div>
              <p className="foundersTitle">Meet the founders</p>
              <div className="bios">
                {creatorBio.map((item, i) => (
                  <Link key={i} to={`/creator_information/${item.bio_name}`}>
                    <div className="eachBio">
                      <div className="bios">
                        <div>
                          <img
                            className="bioImg"
                            src={item.bio_profile_picture}
                            alt={item.bio_profile_picture}
                          ></img>
                        </div>
                        <p className="creatorName"> {item.bio_name} </p>
                      </div>
                      <p></p>
                      {matchesToMaxWidth ? <p> {item.bio_about_me} </p> : <></>}
                    </div>
                  </Link>
                ))}

              </div>
            </div>
          ) : (
            <CircularProgress></CircularProgress>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
