const express = require("express"); //load express moduleconst app = express()
const app = express();

const middleware = require("../src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", middleware);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;
