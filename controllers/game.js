const { Router } = require("express");
const game = Router();

game.get("/:game", (req, res) => {
  const { game } = req.params;
  res.render("game", { game });
});

module.exports = game;
