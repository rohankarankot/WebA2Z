import React, { useContext } from "react";

import styles from "./navbar.module.css";
import { BRAND_NAME_SHORT } from "../../constants";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";
import { CartContext } from "../../context/cart.context";

function NavbarComponent() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <nav
        className={`container navbar navbar-dark navbar-expand-lg bg-body-tertiary ${styles.bg}`}
      >
        <div className="container-fluid">
          <Link to={"/"} className={`navbar-brand ${styles.c_navbar_brand}`}>
            {BRAND_NAME_SHORT}
          </Link>
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
              {ROUTES.map((route) => {
                return (
                  <>
                    {route.isDropDown ? (
                      <li className={`nav-item dropdown ${styles.gap_10}`}>
                        <a
                          className="nav-link dropdown-toggle"
                          href="/"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {route.name}
                        </a>
                        <ul className="dropdown-menu">
                          {route.moreRoutes.map((route) => {
                            return (
                              <li>
                                <NavLink
                                  key={`${route.route}`}
                                  to={`${route.route}`}
                                  className={({ isActive }) => {
                                    return ` ${
                                      isActive
                                        ? `dropdown-item active`
                                        : `dropdown-item`
                                    }`;
                                  }}
                                >
                                  {route.name}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <NavLink
                          key={`${route.route}`}
                          to={`${route.route}`}
                          className={({ isActive }) => {
                            return ` ${
                              isActive
                                ? `nav-link active ${styles.gap_10}`
                                : `nav-link ${styles.gap_10}`
                            }`;
                          }}
                        >
                          {route.name}
                        </NavLink>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
            <button type="button" class="btn btn-primary position-relative">
              cart
              <i class="fa-solid fa-cart-shopping"></i>
              {
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {cart}
                </span>
              }
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
