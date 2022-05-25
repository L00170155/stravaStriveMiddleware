const express = require("express");
const router = express.Router();

const getUsers = require("./getDbUsers");
const addUsers = require("./addDbUsers");
const getOneUser = require("./getOneUser");
const auth = require("./stravaauth");
const login = require("./stravalogin");

router.post("/add", addUsers);
router.get("/getdbusers", getUsers);
router.get("/stravaauth", auth);
router.get("/stravalogin", login);
router.get("/getOneUser", getOneUser);
module.exports = router;
