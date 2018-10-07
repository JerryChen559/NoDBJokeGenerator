import React, { Component } from "react";
import axios from "axios";
// import DadJokes from "./DadJokes";
import FavoriteButton from "./FavoriteButton";
import FavoriteJokesList from "./FavoriteJokesList";
import "./MainBody.css";

class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dadjokes: [],
      favoriteJokes: []
    };
    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }

  componentDidMount() {
    this.newDadJoke();
    this.getFavoriteJokesList();
  }

  newDadJoke() {
    axios.get("/api/dadjokes").then(response => {
      console.log(response.data);
      this.setState({ dadjokes: response.data });
    });
  }

  getFavoriteJokesList() {
    axios
      .get("/api/dadjokes/favorites")
      .then(response => this.setState({ favoriteJokes: response.data }))
      .catch(error => console.log(error));
  }

  // POST:
  addFavorite() {
    axios
      .post("/api/dadjokes/favorites", { dadjokes: this.state.dadjokes })
      .then(response => this.setState({ favoriteJokes: response.data }));
  }

  // DELETE
  deleteFavorite(id) {
    axios
      .delete(`/api/dadjokes/${id}`)
      .then(response => this.setState({ favoriteJokes: response.data }));
  }

  render() {
    console.log(this.state.dadjokes);
    return (
      <div className="mainbody">
        <button className="button" onClick={() => this.newDadJoke()}>
          New Dad Joke!
        </button>
        <h4>{this.state.dadjokes}</h4>
        {/* put this result in dad list dad component.
         <DadJokes dadjokes={this.state.dadjokes} /> */}
        <FavoriteButton add={this.addFavorite} />
        <div>
          <FavoriteJokesList
            favoriteJokes={this.state.favoriteJokes}
            delete={this.deleteFavorite}
          />
        </div>
      </div>
    );
  }
}

export default MainBody;
