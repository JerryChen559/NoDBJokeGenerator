const axios = require("axios");

let dadjokes = [];
let favoriteJokes = [];

function getJoke(req, res, next) {
  axios
    .get("https://icanhazdadjoke.com/", {
      headers: { Accept: "text/plain" }
    })
    .then(response => {
      // console.log(response.data);
      dadjokes = response.data;
      res.status(200).send(dadjokes);
    })
    .catch(err => res.status(500).json(err));
}

function getFavoriteJokesList(req, res, next) {
  res.status(200).json(favoriteJokes);
}

function addFavoriteJoke(req, res, next) {
  // console.log(dadjokes);
  favoriteJokes.push(req.body.dadjokes);
  // console.log(favoriteJokes);
  res.status(200).json(favoriteJokes);
}

// function addSeries(req, res) {
//   series.push(req.query.newSeries)
//   res.status(200).send(series)
// }

function deleteFavoriteJoke(req, res) {
  let removed = favoriteJokes.splice(req.params.deleteIndex, 1);
  console.log(removed);
  res.status(200).send(favoriteJokes);
}

module.exports = {
  getJoke,
  addFavoriteJoke,
  getFavoriteJokesList,
  deleteFavoriteJoke
};
