const { Router } = require("express");
const developer = Router();
const { viewDeveloper } = require("../db/queries");

developer.get("/", async (req, res) => {
  const { developer } = req.query;
  const developerName = await viewDeveloper(developer);
  console.log(developer);
  res.render("developer", { developerName });
});

module.exports = developer;
