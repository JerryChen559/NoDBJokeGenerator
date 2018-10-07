const axios = require("axios");

let momjokes = [];

function getJokes(req, res, next) {
  axios
    .get("http://api.yomomma.info/")
    .then(response => {
      console.log(response.data.joke);
      momjokes = response.data.joke;
      console.log(momjokes);
      res.status(200).json(momjokes);
    })
    .catch(err => res.status(500).json(err));
}

// function deleteJoke(req, res) {
//   let removed = momjokes.splice(req.params.deleteIndex, 1);
//   console.log(removed);
//   res.status(200).json(momjokes);
// }

module.exports = {
  getJokes
  // deleteJoke
};
