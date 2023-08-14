import React, { useState, useEffect } from "react";
import "./DisplayInstruments.css";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";

//takes in our instrument prop and displays it onto the page
function DisplayInstruments({ instruments }) {
  const [filter, setFilter] = useState("All");
  const [filterList, setFilterList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let dataProvider = searchResults;
  const handleChange = (event) => {
    dataProvider = searchResults;
    setSearchTerm(event.target.value);
  };

  //this checks our filter state to see which instruements to filter for the user
  useEffect(() => {
    //we create a data variable and loop through it and return the filtered instruments
    //we put the filtered instruments inside of data variable
    const data = instruments.filter((instrument) => {
      if (instrument.instrument_group === filter) {
        return instrument;
      } else {
        return null;
      }
    });
    if (filter === "All") {
      setFilterList(instruments);
    } else {
      setFilterList(data);
    }
  }, [filter, instruments]);

  //we add the current instruments that are filtered to our insturment state
  useEffect(() => {
    const data = instruments.filter((instrument) => {
      if (instrument.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return instrument;
      } else {
        return null;
      }
    });
    if (searchTerm === "") {
      setSearchResults(instruments);
    } else {
      setSearchResults(data);
    }
  }, [searchTerm, instruments]);

  //we get our filtered list and append it to our filter state
  const getFilterName = (ev) => {
    dataProvider.value = filterList;
    setFilter(ev.target.id);
  };
  function Data() {
    if (filter !== "All") {
      dataProvider = filterList;
    }
    let data = dataProvider.map((instrument, i) => (
      <>
        <Card className={"col card"}>
          <Link to={`/instrument_information/${instrument.name}`}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {instrument.name}
                </Typography>
              </CardContent>
              <CardMedia
                key={i}
                component="img"
                className="instrumentImg"
                image={
                  require(`../../Media/InstrumentProfileImg/${instrument.name
                    .split(" ")
                    .join("")}.jpg`).default
                }
                alt={instrument.name}
                title={instrument.name}
              />
            </CardActionArea>
          </Link>
        </Card>
      </>
    ));
    return data;
  }
  if (!filterList) {
    return <CircularProgress></CircularProgress>;
  } else {
    return (
      <>
        <div className="conatiner">
          <div className="stickSearchBar">
            <h5 className="instrumentsNavBar">INSTRUMENTS</h5>
            <input
              type="text"
              placeholder="Search"
              id="searchBar"
              value={searchTerm}
              onChange={handleChange}
            />
            <div className="filterInstrumentNames">
              <button onClick={getFilterName} id="All">
                All
              </button>
              <button onClick={getFilterName} id="Idiophone">
                Idiophone
              </button>
              <button onClick={getFilterName} id="Membranophone">
                Membranophone
              </button>
              <button onClick={getFilterName} id="Chordophone">
                Chordophone
              </button>
              <button onClick={getFilterName} id="Aerophone">
                Aerophone
              </button>
            </div>
          </div>
          <div className="row row-cols-2" id="cardRow">
            {Data()}
          </div>
        </div>
      </>
    );
  }
}

export default DisplayInstruments;
