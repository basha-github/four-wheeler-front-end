//import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/all">
                All Vehicles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">
                New Vehicle
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact US
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
