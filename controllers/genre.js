const { Router } = require("express");
const genre = Router();
const { viewGenre } = require("../db/queries");

genre.get("/:genreId", async (req, res) => {
  const { genreId } = req.params;
  console.log(genreId);

  const games = await viewGenre(genreId);
  console.log(games);

  res.render("genre", { games });
});

module.exports = genre;
