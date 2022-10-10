import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {/* <li className="nav-item">
              <a href="#">
                <span className="nav-link px-2 text-muted">
                  <FaFacebook />
                </span>
              </a>
            </li> */}
            <li
              className="nav-item"
              style={{
                color: "#1778F2",
                fontSize: "1.3rem",
              }}
            >
              <a
                href="https://www.facebook.com/kefork.antranek"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="nav-link px-2 text-muted">
                  <FaFacebook
                    style={{
                      color: "#1778F2",
                      fontSize: "1.5rem",
                    }}
                  />
                </span>
              </a>
            </li>
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
          <p
            className="text-center text-muted"
            style={{
              color: "#023047",
              fontSize: "1.5rem",
            }}
          >
            &copy; 2022 B&B Shop, Inc
          </p>
          {/* <p
            className="nav-link"
            to="/contact"
            style={{
              color: "#023047",
              fontSize: "1.5rem",
            }}
          >
            &copy; 2022 
          </p> */}
        </footer>
      </div>
    </Fragment>
  );
};
export default Footer;
