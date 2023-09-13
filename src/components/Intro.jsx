import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h1 className="intro__title">Great coffee made simple.</h1>
        <p className="intro__text">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>

        <button className="intro__btn">Create your plan</button>
      </div>
    );
  }
}
