const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/user.controllers");

router.post("/register", registerUser);
router.get("/register", (req, res) => {
    res.send("Welcome to the reg page")
});
module.exports = router;