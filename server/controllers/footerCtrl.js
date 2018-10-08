const axios = require("axios");

function updateFooter(req, res, next) {
  // console.log(req.params.id, req.body);
  console.log("footer", req.body.word);
  const { word } = req.body;

  if (word === "goodbye") {
    res.status(200).json("lolol");
  } else if (word === "lolol") {
    res.status(200).json("goodbye");
  }
}

module.exports = {
  updateFooter
};
