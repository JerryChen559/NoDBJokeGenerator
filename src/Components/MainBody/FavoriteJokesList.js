import React, { Component } from "react";
import axios from "axios";
import "./FavoriteJokesList.css";

class FavoriteJokesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteJokes: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/dadjokes/favorites")
      .then(response => this.setState({ favoriteJokes: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    let list = this.props.favoriteJokes.map((el, ind) => {
      return (
        <div key={ind}>
          {el}
          {console.log(this.props.favoriteJokes)}
          <button className="favebutton" onClick={() => this.props.delete(ind)}>
            X
          </button>
        </div>
      );
    });
    return (
      <div className="containList">
        <div>Favorite jokes:</div>
        <div className="faves">{list}</div>
      </div>
    );
  }
}

export default FavoriteJokesList;
