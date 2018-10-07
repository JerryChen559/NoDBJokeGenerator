const axios = require("axios");

let chuckjokes = [];

function getJokes(req, res, next) {
  axios
    .get("http://api.icndb.com/jokes/random")
    .then(response => {
      console.log(response.data.value.joke);
      chuckjokes = response.data.value.joke;
      res.status(200).send(chuckjokes);
    })
    .catch(err => res.status(500).send(err));
}

// function deleteSeries(req, res) {
//  let removed = series.splice(req.params.deleteIndex, 1)
//  console.log(removed)
//   res.status(200).send(series)
// }

module.exports = {
  getJokes
  // deleteJoke
};
