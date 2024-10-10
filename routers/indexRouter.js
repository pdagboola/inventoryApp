const { Router } = require("express");
const indexRouter = Router();
const index = require("../controllers/index");
const newGame = require("../controllers/newGame");
const genre = require("../controllers/genre");

indexRouter.use("/", index);

indexRouter.use("/genre", genre);

// indexRouter.use("/game", game);

// indexRouter.use("/dev", developer);

// indexRouter.use("/edit-game", editGame);

indexRouter.use("/new-game", newGame);

// indexRouter.use("/delete-game", deleteGame);

// indexRouter.use("/search-genre", searchGenre);

// indexRouter.use("/search-dev", searchDev);

module.exports = indexRouter;
