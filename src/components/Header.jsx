import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

// import CartBtn from "./Buttons/CartBtn";
// import Login from "./Buttons/Login";
// import Signup from "./Buttons/Signup";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <span className="navbar-brand w-100 ">
            <Link
              className="navbar-brand mx-auto"
              to="/"
              style={{
                color: "#023047",
                fontSize: "1.5rem",
              }}
            >
              <img
                src={Logo}
                alt="logo-design"
                style={{ width: "120px", height: "120px" }}
              />
            </Link>
          </span>
          <div
            className="collapse navbar-collapse collapse w-100 justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  aria-current="page"
                  style={{
                    color: "#023047",
                    fontSize: "1.5rem",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link"
                  style={{
                    color: "#023047",
                    fontSize: "1.5rem",
                  }}
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  style={{
                    color: "#023047",
                    fontSize: "1.5rem",
                  }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{
                    color: "#023047",
                    fontSize: "1.5rem",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <Login />
          <Signup /> 
          <CartBtn /> */}
        </div>
      </nav>
    </>
  );
};
export default Header;
