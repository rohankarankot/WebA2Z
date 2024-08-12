import React, { useContext } from "react";
import { BRAND_NAME_SHORT } from "../../constants";
import styles from "./footer 2.component.css";
import { StoreContext } from "../../context/storeContext";

function FooterComponent() {
  const { setValue } = useContext(StoreContext);
  return (
    <footer>
      <button
        onClick={() => {
          setValue("random" + Math.round(Math.random() * 10)); // another way => ~~(Math.random() * 10)
        }}
      >
        change
      </button>
      <div className="logo">{BRAND_NAME_SHORT}</div>

      <div className="copyrgt">
        <p>
          &copy;2024 <i>WebA2Z</i> | <b>All Rights Reserved</b>{" "}
        </p>
      </div>

      <div className="icons">
        <i className="bx bxl-instagram"></i>
        <i className="bx bxl-twitter"></i>
        <i className="bx bxl-facebook"></i>
        <i className="bx bxl-youtube"></i>
      </div>
    </footer>
  );
}

export default FooterComponent;
