import React from "react";
import "./Herocomponent.css";
function HeroComponent() {
  return (
    <div className="container hero-background">
      <div className="row pb-5">
        <div className="col-6 d-flex flex-column align-items-start px-lg-5 heading-style mt-3">
          <p>
            Fastest
            <span style={{ color: "coral" }}>Delivery</span> <br /> & Easy
            <span style={{ color: "coral" }}>Pickup</span>
          </p>
          <div className="row">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZR6Gs7vDfFNNMsCAc2pNG0LaG3xAgnZDapQ&usqp=CAU"
              alt="miniprofile"
              style={{ width: "90px", marginTop: "10px" }}
            />
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
            <li>Fast Delivery</li>
            <li>Pick Up</li>
            <li>Dine In</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
