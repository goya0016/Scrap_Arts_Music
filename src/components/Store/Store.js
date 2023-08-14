import React from "react";
import "./Store.css";
import { BsArrowRight } from "react-icons/bs";

export default function Store() {
  return (
    <div>
      <h5 className="musiclabTitle">MUSIC LAB</h5>

      <div className="storeContainer">
        <div className="musicLibary">
          <h6>Browse Music Library</h6>
          <div className="musicContainer">
            <div className="photoContainer">
              <img
                src={require("../../Media/ShopImg/shopPic.jpg").default}
                alt="shopImg"
              ></img>
            </div>
            <div className="infoContainer">
              <div>
                <p className="title">Live from Vancouver</p>
                <p className="description">
                  {" "}
                  - Live recording includes 14 songs!
                </p>
              </div>
              <div className="purchaseBtn">
                <a href="https://scrapartsmusic.com/audio" target="__blank">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="musicLibary">
          <h6>Browse Merch</h6>
          <div className="merchContainer">
            <div className="photoContainer">
              <img
                src={require("../../Media/ShopImg/samTShirt.png").default}
                alt="shopImg"
              ></img>
            </div>
            <div className="infoContainer">
              <div>
                <p className="title">T-Shirts</p>
                <p className="description"> - Get our hats and t-shirts.</p>
              </div>
              <div className="purchaseBtn">
                <a href="https://scrapartsmusic.com/store#!" target="__blank">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
