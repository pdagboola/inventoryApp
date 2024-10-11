const { Router } = require("express");
const game = Router();
const { getGame } = require("../db/queries");

game.get("/:title", async (req, res) => {
  const { title } = req.params;
  console.log("Game title:", title);
  const game = await getGame(title);
  console.log("game.ejs:", game);
  res.render("game", { game });
});

module.exports = game;
