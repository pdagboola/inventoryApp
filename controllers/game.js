const { Router } = require("express");
const game = Router();
const { getGame } = require("../db/queries");

game.get("/", async (req, res) => {
  const { searchDeveloper } = req.query;
  console.log("Game title:", searchDeveloper);
  const games = await getGame(searchDeveloper);
  console.log("game.ejs:", games);
  res.render("game", { games });
});

game.get("/:title", async (req, res) => {
  const { title } = req.params;
  const games = await getGame(title);
  res.render("viewGame", { games });
});

module.exports = game;
