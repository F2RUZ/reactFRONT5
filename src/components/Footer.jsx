import React, { Component } from "react";
import footer__logo from "../img/logoo.png";
import insta from "../img/Shape.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <nav className="footer__navbar">
          <img src={footer__logo} alt="" className="footer__img" />
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Home
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                ABOUT US
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Create your plan
              </a>
            </li>
          </ul>

          <ul className="footer__social">
            <li className="footer__item-social">
              <img src={insta} alt="" className="footer__social-img" />
            </li>
            <li className="footer__item-social">
              <img src={insta} alt="" className="footer__social-img" />
            </li>
            <li className="footer__item-social">
              <img src={insta} alt="" className="footer__social-img" />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
