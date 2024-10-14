const { Router } = require("express");
const game = Router();
const { getGame, gameGenre } = require("../db/queries");

game.get("/", async (req, res) => {
  const { searchDeveloper } = req.query;
  console.log("Game title:", searchDeveloper);
  const games = await getGame(searchDeveloper);
  console.log("game.ejs:", games);
  res.render("game", { games });
});

game.get("/:title/:id", async (req, res) => {
  // const array = req.params;
  // console.log("Here's the array retrieved from parameters", array);
  const { title, id } = req.params;
  console.log({ title, id });
  console.log("Here's the id retrieved from the params", id);
  const games = await getGame(title);
  const genreName = await gameGenre(id);
  console.log("Here's the name of the game genre", genreName);
  res.render("viewGame", { games: games, genres: genreName });
});

module.exports = game;
