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

    this.submitEditedJoke = this.submitEditedJoke.bind(this);
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

  submitEditedJoke() {
    this.setState({
      // this.state of joke being edited: value of string in the input array,
      // having trouble getting this.state.jokeToEdit save on the render.
      // index problem and update problem may be fixed when I set up PUT on axios to the back end.
      jokeToEdit: this.state.jokeToEdit,
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
            <div>
              {/* need to fix input field to only edit the selected edit.
              need to send logic to the back end with PUT */}
              <input
                placeholder="copy of current joke"
                value={this.state.jokeToEdit}
                onChange={e => this.handleJoke(e.target.value)}
              />
              <button className="submitbutton" onClick={this.submitEditedJoke}>
                submit updated Joke
              </button>
            </div>
          ) : (
            <div>{el}</div>
          )}
          <button
            className="editbutton"
            onClick={() => this.updateJokeHander(ind, el)}
          >
            {this.state.editMode ? "Cancel" : "Edit"}
          </button>
          <button
            className="deletebutton"
            onClick={() => this.props.delete(ind)}
          >
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
