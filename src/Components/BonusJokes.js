import React, { Component } from "react";

class BonusJokes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      momjoke: [],
      chuckjoke: []
    };
  }

  render() {
    return (
      <div>
        {/* add button component to reveal joke. component used twice. */}
        <div>Bonus yo momma joke: JokeGoesHere </div>
        {/* add button component to reveal joke */}
        <div>Bonus Chuck Norris joke: JokeGoesHere</div>
      </div>
    );
  }
}

export default BonusJokes;
