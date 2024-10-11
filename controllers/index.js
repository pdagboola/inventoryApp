const { Router } = require("express");
const index = Router();
const { getGames, allGenres } = require("../db/queries");

index.get("/", async (req, res) => {
  const games = await getGames();
  const genres = await allGenres();
  console.log(genres);
  //   const games = rows.map((row) => newRow);
  res.render("index", { games: games, genres: genres });
});

module.exports = index;
