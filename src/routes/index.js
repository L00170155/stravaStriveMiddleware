const express = require("express");
const router = express.Router();

const getUsers = require("./getDbUsers");
const addUsers = require("./addDbUsers");
const getOneUser = require("./getOneUser")
const auth = require("./stravaauth");
const { route } = require("../app");

router.post("/add", addUsers);
    // router.post("/add", function(req, res) {
    //     const user_id = req.body.id;
    //     addUsers(user)});
router.get("/getdbusers", getUsers);
router.get("/stravaauth", auth);
router.get("/getOneUser", getOneUser);
module.exports = router;
