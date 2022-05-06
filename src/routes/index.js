const express = require("express");
const router = express.Router();
const fact = require("./fact");
const auth = require("./stravaauth");
console.log('index')
router.get("/facts", fact);
router.get("/stravaauth", auth);
module.exports = router;
