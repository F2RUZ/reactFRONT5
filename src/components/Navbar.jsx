import React, { Component } from "react";
import logo from "../img/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="" className="navbar__logo" />
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="£" className="navbar__link">
              HOME
            </a>
          </li>
          <li className="navbar__item">
            <a href="£" className="navbar__link">
              ABOUT US
            </a>
          </li>
          <li className="navbar__item">
            <a href="£" className="navbar__link">
              Create your plan
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
