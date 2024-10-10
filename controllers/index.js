const { Router } = require("express");
const index = Router();
const { getGames } = require("../db/queries");

index.get("/", async (req, res) => {
  const games = await getGames();
  console.log(games);
  //   const games = rows.map((row) => newRow);
  res.render("index", { games: games });
});

module.exports = index;
