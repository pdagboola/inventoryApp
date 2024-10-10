const { Router } = require("express");
const editGame = Router();
const { updateGame } = require("../db/queries");

editGame.get("/", (req, res) => {
  const { title, rating, id } = req.query;
  console.log({ title, rating, id });
  res.render("editGame", { title, rating, id });
});

editGame.post("/", async (req, res) => {
  const { id, title, release_date, rating } = req.body;
  await updateGame(id, title, release_date, rating);
  res.redirect("/");
});

module.exports = editGame;
