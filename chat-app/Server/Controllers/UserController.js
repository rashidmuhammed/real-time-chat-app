const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const validator = require("validator");
const User = require("../Models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findone({ email });
  if (user) return res.status(404).json("user already exists");

  if (!name || !email || !password)
    return res.status(404).json("All fields are required");

  if (!validator.isEmail(email))
    return res.status(404).json("email is not validated");
});

module.exports = { registerUser };
