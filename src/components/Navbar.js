import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Navbar(props, { title = "TextUtils" }) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {title}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li> */}
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
                onClick={() => props.toggleMode("primary")}
              ></div>
            </div>
            <div
              className={`form-check form-switch text-${props.textColor} mx-3`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Toggle Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string,
// };

// Navbar.defaultProps = {
//   title: "Set title here",
//   about: "Set about text here",
// };

export default Navbar;
