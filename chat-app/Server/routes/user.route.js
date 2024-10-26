const express = require("express");
const router = express.Router();
const authenticationAPIs = require("../Controllers/UserController");

router.route("/register").post(authenticationAPIs.registerUser);
router.route("/login").post(authenticationAPIs.loginUser);

module.exports = router;
