const express = require("express"); //load express moduleconst app = express()
const app = express();

const middleware = require("../src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/api", middleware);

app.get("/", (req, res) => {
  res.send("Hello, World!");
}); 

module.exports = app;
