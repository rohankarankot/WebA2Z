import React from "react";
import "./Herocomponent.css";
function HeroComponent() {
  return (
    <div className="container hero-background">
      <div className="row pb-5">
        <div className="col-6 d-flex flex-column align-items-start px-lg-5 heading-style mt-3">
          <p>
            <span style={{ color: "black" }}>Fastest </span>
            <span style={{ color: "coral" }}>Delivery</span> <br />
            <span style={{ color: "coral" }}> & Easy </span>
            <span style={{ color: "black" }}>Pickup</span>
          </p>
          <div className="chat-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZR6Gs7vDfFNNMsCAc2pNG0LaG3xAgnZDapQ&usqp=CAU"
              alt="miniprofile"
              style={{ width: "90px", marginTop: "10px" }}
              className="chat-image"
            />
            <div className="chat-message">
              <p style={{ color: "black" }}>
                When you are too lazy to cook, we are just a click away
              </p>
            </div>
          </div>
          <div className="container">
            <div className="find-restaurant">
              <button className="find-button">
                <i className="fas fa-search"></i> <b>Find Restaurants</b>
              </button>
            </div>
            <div className="how-to-order">
              <i
                className="fas fa-play playIcon"
                style={{ color: "coral" }}
              ></i>
              <b style={{ color: "coral" }}>How to Order?</b>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <img
            src="https://w0.peakpx.com/wallpaper/192/735/HD-wallpaper-hungry-sandwich-food-eat-girl.jpg"
            alt="hero"
            className="img-fluid"
          />
        </div>
        <div className="col-2">
          <ul className="hero-ul">
            <li>
              <i className="fas fa-truck-fast"></i>
              <b style={{ fontSize: "19px" }}>Fast Delivery</b>
            </li>
            <li>
              <i className="fas fa-box"></i>
              <b style={{ fontSize: "19px" }}>Pick Up</b>
            </li>
            <li>
              <i className="fas fa-utensils"></i>
              <b style={{ fontSize: "19px" }}>Dine In</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
