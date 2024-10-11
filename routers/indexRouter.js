const { Router } = require("express");
const indexRouter = Router();
const index = require("../controllers/index");
const newGame = require("../controllers/newGame");
const genre = require("../controllers/genre");
const developer = require("../controllers/developer");
const game = require("../controllers/game");
const editGame = require("../controllers/editGame");
const deleteGame = require("../controllers/deleteGame");

indexRouter.use("/", index);

indexRouter.use("/genre", genre);

indexRouter.use("/game", game);

indexRouter.use("/dev", developer);

indexRouter.use("/edit-game", editGame);

indexRouter.use("/new-game", newGame);

indexRouter.use("/delete-game", deleteGame);

module.exports = indexRouter;
