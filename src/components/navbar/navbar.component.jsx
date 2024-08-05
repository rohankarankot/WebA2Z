import React from "react";

import styles from "./navbar.module.css";
import { BRAND_NAME_SHORT } from "../../constants";

function NavbarComponent() {
  return (
    <div>
      <nav
        className={`container navbar navbar-dark navbar-expand-lg bg-body-tertiary ${styles.bg}`}
      >
        <div className="container-fluid">
          <a className={`navbar-brand ${styles.c_navbar_brand}`} href="#">
            {BRAND_NAME_SHORT}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
              <li className="nav-item">
                <a
                  className={`nav-link active ${styles.gap_10}`}
                  aria-current="page"
                  href="#"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.gap_10}`}
                  aria-current="page"
                  href="#"
                >
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.gap_10}`}
                  aria-current="page"
                  href="#"
                >
                  Services
                </a>
              </li>

              <li className={`nav-item dropdown ${styles.gap_10}`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-primary">Profile</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
