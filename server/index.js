const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 4000;

// functions from controllers
const dc = require("./controllers/dadCtrl");
// const mc = require("./Controllers/mCtrl");
// const cc = require("./Controllers/cCtrl");

const app = express();
app.use(json());
app.use(cors());

// test route
// app.get("/api/test", (req, res, next) => {
//   res.json("Test passes. woop woop!");
// });

//GET 10 jokes https://icanhazdadjoke.com/api/
//GET 10 jokes https://api.yomomma.info/
//GET 1 joke http://www.icndb.com/api/

//TODO: store 10 jokes in an array to manipulate.
app.get("/api/dadjokes", dc.getJoke);

app.get("/api/dadjokes/favorites", dc.getFavoriteJokesList);
app.post("/api/dadjokes/favorites", dc.addFavoriteJoke);
// app.put("/api/dadjokes/:id", dc.updateFavoriteJoke);
app.delete("/api/dadjokes/:deleteIndex", dc.deleteFavoriteJoke);

// app.get("/api/momjokes", mc.getJokes);
// app.get("/api/chuckjokes", cc.getJokes);

//TODO: post for Dad
//TODO: put for Dad
//TODO: delete for Mom
// app.get("/api/dadjokes", dc.addJoke);
// app.get("/api/dadjokes", dc.editJoke);
// app.delete("/api/momjokes/:deleteIndex", mc.deleteJoke);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
