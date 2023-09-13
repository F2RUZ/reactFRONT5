import React, { Component } from "react";
import card from "../img/card.png";

export default class Cards extends Component {
  render() {
    return (
      <div className="cards">
        <div className="cards__card">
          <img className="cards__img" src={card} alt="" />
          <h3 className="cards__title">Gran Espresso</h3>
          <p className="cards__text">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>
        <div className="cards__card">
          <img className="cards__img" src={card} alt="" />
          <h3 className="cards__title">Gran Espresso</h3>
          <p className="cards__text">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>{" "}
        <div className="cards__card">
          <img className="cards__img" src={card} alt="" />
          <h3 className="cards__title">Gran Espresso</h3>
          <p className="cards__text">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>{" "}
        <div className="cards__card">
          <img className="cards__img" src={card} alt="" />
          <h3 className="cards__title">Gran Espresso</h3>
          <p className="cards__text">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>
      </div>
    );
  }
}
