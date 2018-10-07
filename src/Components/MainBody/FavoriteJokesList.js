import React, { Component } from "react";
import axios from "axios";
import "./FavoriteJokesList.css";

class FavoriteJokesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteJokes: [],
      jokeToEdit: "",
      editMode: false
    };
  }

  componentDidMount() {
    axios
      .get("/api/dadjokes/favorites")
      .then(response => this.setState({ favoriteJokes: response.data }))
      .catch(error => console.log(error));
  }

  handleJoke(val) {
    // console.log(val);
    this.setState({ jokeToEdit: val });
  }

  updateJokeHander(ind, el) {
    this.setState({
      jokeToEdit: el,
      editMode: !this.state.editMode
    });
  }

  render() {
    console.log(this.state);
    let list = this.props.favoriteJokes.map((el, ind) => {
      return (
        <div key={ind}>
          {/* {console.log(this.props.favoriteJokes)} */}

          {this.state.editMode ? (
            <input
              placeholder="copy of current joke"
              value={this.state.jokeToEdit}
              onChange={e => this.handleJoke(e.target.value)}
            />
          ) : (
            <div>{el}</div>
          )}
          <button
            className="confirmChange"
            onClick={() => this.updateJokeHander(ind, el)}
          >
            {this.state.editMode ? "Cancel" : "Edit"}
          </button>
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
