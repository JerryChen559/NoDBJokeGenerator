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

    // this.submitEditedJoke = this.submitEditedJoke.bind(this);
    this.updateJokeHandler = this.updateJokeHandler.bind(this);
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

  // user can edit and cancel edit
  updateJokeHandler(ind, el) {
    this.setState({
      jokeToEdit: el,
      editMode: !this.state.editMode
    });
  }

  // submitEditedJoke(id) {
  //   this.props.submit(this.state.jokeToEdit, id);
  //   this.setState({
  //     jokeToEdit: this.state.jokeToEdit.joke,
  //     editMode: !this.state.editMode
  //   });
  // }

  render() {
    console.log(this.state);
    let list = this.props.favoriteJokes.map((el, ind) => {
      console.log(el.id);
      return (
        <div key={ind}>
          {/* {console.log(this.props.favoriteJokes)} */}

          {this.state.editMode ? (
            <div>
              {/* need to fix input field to only edit the selected edit.
              need to send logic to the back end with PUT */}
              {/* I think I need to assign an id for each joke before I'm able to make the PUT call.  */}
              <input
                placeholder="copy of current joke"
                value={this.state.jokeToEdit}
                onChange={e => this.handleJoke(e.target.value)}
              />
              <span
                className="submitbutton"
                // onClick={() => this.submitEditedJoke(el.id)}
              >
                {" "}
                <img
                  className="urkel"
                  src="https://cdn.dribbble.com/users/877428/screenshots/3691927/steve_1x.jpg"
                  alt="steve urkel pic"
                />
                Sike, no edits allowed!
              </span>
            </div>
          ) : (
            <div>{el}</div>
          )}
          <button
            className="editbutton"
            onClick={() => this.updateJokeHandler(ind, el)}
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
