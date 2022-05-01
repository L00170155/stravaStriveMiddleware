const express = require("express");
const router = express.Router();
const fact = require("./fact");
console.log('index')
router.get("/facts", fact);
module.exports = router;
