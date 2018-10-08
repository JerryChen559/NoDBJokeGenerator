import React, { Component } from "react";
import axios from "axios";
import MomJokes from "./MomJokes";
import ChuckJokes from "./ChuckJokes";
import DadJokes from "../../Components/MainBody/DadJokes";
import "./BonusJokes.css";

class BonusJokes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      momjokes: [],
      chuckjokes: [],
      dadjokes: []
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
    axios.get("/api/dadjokes").then(response => {
      console.log(response.data);
      this.setState({ dadjokes: response.data });
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
        <div>One extra dad joke: </div>
        <div className="bonustext">
          <DadJokes dadJokes={this.state.dadjokes} />
        </div>
      </div>
    );
  }
}

export default BonusJokes;
