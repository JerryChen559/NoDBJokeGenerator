const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 4000;

// controllers
const dc = require("./controllers/dadCtrl");
const mc = require("./Controllers/momCtrl");
const cc = require("./Controllers/chuckCtrl");
const fc = require("./Controllers/footerCtrl");

const app = express();
app.use(json());
app.use(cors());

// test route
// app.get("/api/test", (req, res, next) => {
//   res.json("Test passes. woop woop!");
// });

// API's I am working with
// jokes https://icanhazdadjoke.com/api/
// jokes https://api.yomomma.info/
// http://www.icndb.com/api/

// Dad jokes for mainBody
app.get("/api/dadjokes", dc.getJoke);

app.get("/api/dadjokes/favorites", dc.getFavoriteJokesList);
app.post("/api/dadjokes/favorites", dc.addFavoriteJoke);
// app.put("/api/dadjokes/favorites/:id", dc.updateFavoriteJoke);
app.delete("/api/dadjokes/:deleteIndex", dc.deleteFavoriteJoke);

// Put to change footer words
app.put("/api/footer/", fc.updateFooter);

// BonusJokes under footer
app.get("/api/momjokes", mc.getJokes);
app.get("/api/chuckjokes", cc.getJokes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
