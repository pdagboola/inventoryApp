const express = require("express");
const app = express();
const path = require("path");
const assetsPath = path.join(__dirname, "public");
const PORT = 3030;
const router = require("./routers/indexRouter");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`App is currently running on ${PORT}`);
});
