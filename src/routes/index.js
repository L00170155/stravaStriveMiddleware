const express = require("express");
const router = express.Router();

const getUsers = require("./getDbUsers");
const addUsers = require("./addDbUsers");
const auth = require("./stravaauth");

router.post("/add", addUsers);
    // router.post("/add", function(req, res) {
    //     const user_id = req.body.id;
    //     addUsers(user)});
router.get("/getdbusers", getUsers);
router.get("/stravaauth", auth);
module.exports = router;
