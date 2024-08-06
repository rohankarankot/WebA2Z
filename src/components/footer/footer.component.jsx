import React from "react";
import { BRAND_NAME_SHORT } from "../../constants";
import styles from "./footer.component.css";

function FooterComponent() {
  return (
    <footer>
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
