const { Router } = require("express");
const game = Router();
const { getGame } = require("../db/queries");

game.get("/:title", async (req, res) => {
  const { title } = req.params;
  console.log("Game title:", title);
  const games = await getGame(title);
  console.log("game.ejs:", games);
  res.render("game", { games });
});

module.exports = game;
