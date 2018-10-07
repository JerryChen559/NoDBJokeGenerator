import React, { Component } from "react";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody/MainBody";
import Footer from "./Components/Footer";
import BonusJokes from "./Components/BonusJokes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainBody />
        <Footer />
        <BonusJokes />
      </div>
    );
  }
}

export default App;
