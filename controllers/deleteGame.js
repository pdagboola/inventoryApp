const { Router } = require("express");
const deleteGame = Router();
const { deleteGameFunction } = require("../db/queries");

deleteGame.post("/", async (req, res) => {
  const { delete_title } = req.body;
  console.log("title to delete:", delete_title);
  await deleteGameFunction(delete_title);
  res.redirect("/");
});

module.exports = deleteGame;
