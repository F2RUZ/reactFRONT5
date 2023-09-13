import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import Intro from "./components/Intro";
import Cards from "./components/Cards";
import Choose from "./components/Choose";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Navbar />
          <Intro />
          <Cards />
          <Choose />
        </div>
      </div>
    );
  }
}
