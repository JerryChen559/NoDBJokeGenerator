const axios = require("axios");

let dadjokes = [];
let favoriteJokes = [];
// let jokeId = 0;

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
  // having trouble pass object to front end.
  // favoriteJokes.push({ joke: req.body.dadjokes, id: jokeId });
  // console.log(favoriteJokes);
  // jokeId++;
  res.status(200).json(favoriteJokes);
}

// function addSeries(req, res) {
//   series.push(req.query.newSeries)
//   res.status(200).send(series)
// }

// Want to take the old favorites list.
// take updated joke and replace the old joke in the appropriate index.
// send out favorites list.

// function updateFavoriteJoke(req, res, next) {
//   console.log(req.params.id, req.body);
//   const { id } = req.params;
//   const { joke } = req.body;
//   let updated = favoriteJokes.splice(id, 1, joke);
//   console.log("update", updated);
//   return res.status(200).json(updated);
// }

const updateFavoriteJoke = (req, res, next) => {
  console.log("check", req.body);
  const { id } = req.params;
  const { joke } = req.body;
  console.log("joke", req.body);
  // let jokeIndex = favoriteJokes.findIndex(el => el.id === +id);
  favoriteJokes[+id] = joke;
  // jokeId++;
  console.log("test", favoriteJokes);
  return res.status(200).json(favoriteJokes);
};

function deleteFavoriteJoke(req, res) {
  let removed = favoriteJokes.splice(req.params.deleteIndex, 1);
  console.log(removed);
  res.status(200).send(favoriteJokes);
}

module.exports = {
  getJoke,
  addFavoriteJoke,
  getFavoriteJokesList,
  updateFavoriteJoke,
  deleteFavoriteJoke
};
