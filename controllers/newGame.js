const { Router } = require("express");
const newGame = Router();
const { insertGame } = require("../db/queries");

newGame.get("/", (req, res) => {
  res.render("new-game-form");
});
newGame.post("/", (req, res) => {
  const { title, release_date, rating, image_url } = req.body;
  console.log(req.body);
  console.log("img-url:", image_url);
  insertGame(title, release_date, rating, image_url);

  res.redirect("/");
});

module.exports = newGame;
