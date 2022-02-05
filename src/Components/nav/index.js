import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid" id="top">
        <Link className="navbar-custom navbar-brand" to="/">
          Ben Cyna
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-grip-lines"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-custom nav-link active" aria-current="page" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-custom nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-custom nav-link" to="/">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
