import React, { Component } from "react";
import coffe from "../img/coffee.png";

export default class Choose extends Component {
  render() {
    return (
      <div className="choose">
        <h2 className="choose__titlee">Why choose us?</h2>
        <p className="choose__texts">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="choose__cards">
          <div className="choose__card">
            <img src={coffe} alt="" className="choose__img" />
            <h2 className="choose__title">Best quality</h2>
            <p className="choose__text">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
          <div className="choose__card">
            <img src={coffe} alt="" className="choose__img" />
            <h2 className="choose__title">Best quality</h2>
            <p className="choose__text">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
          <div className="choose__card">
            <img src={coffe} alt="" className="choose__img" />
            <h2 className="choose__title">Best quality</h2>
            <p className="choose__text">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
