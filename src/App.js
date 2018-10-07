import React, { Component } from "react";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody/MainBody";
import Footer from "./Components/Footer";
import BonusJokes from "./Components/BonusJokes/BonusJokes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainBody />
        <Footer />
        <br />
        <BonusJokes />
        <br />
      </div>
    );
  }
}

export default App;
