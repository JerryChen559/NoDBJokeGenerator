import React, { Component } from "react";
import axios from "axios";
import MomJokes from "./MomJokes";
import ChuckJokes from "./ChuckJokes";
import "./BonusJokes.css";

class BonusJokes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      momjokes: [],
      chuckjokes: []
    };
  }

  componentDidMount() {
    axios.get("/api/momjokes").then(response => {
      console.log(response.data);
      this.setState({ momjokes: response.data });
    });
    axios.get("/api/chuckjokes").then(response => {
      console.log(response.data);
      this.setState({ chuckjokes: response.data });
    });
  }

  render() {
    return (
      <div className="bonusJokes">
        <div>Bonus yo momma joke: </div>
        {/* add button component to reveal joke. component used twice. */}
        <div className="bonustext">
          <MomJokes momjokes={this.state.momjokes} />
        </div>

        {/* add button component to reveal joke */}
        <div>Bonus Chuck Norris joke: </div>
        <div className="bonustext">
          <ChuckJokes chuckjokes={this.state.chuckjokes} />
        </div>
      </div>
    );
  }
}

export default BonusJokes;
