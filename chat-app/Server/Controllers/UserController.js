const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const validator = require("validator");
const User = require("../Models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userAvailable = await User.findOne({ email });

  if (userAvailable) return res.status(404).json("user already exists");

  if (!name || !email || !password)
    return res.status(404).json("All fields are required");

  if (!validator.isEmail(email))
    return res.status(404).json("email is not validated");

  const hashedPassword = await bcrypt.hash(password, 13);
  const NewUser = await User.create({
    email,
    password: hashedPassword,
    name,
    email,
  });

  if (NewUser) {
    res.status(200).json("User Created Successfully");
  } else {
    res.status(404).json("Something went wrong");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(404).json("All fields are required");

  if (!validator.isEmail(email))
    return res.status(404).json("Invalid email or password");

  const userAvailable = await User.findOne({ email });

  if (
    userAvailable &&
    (await bcrypt.compare(password, userAvailable.password))
  ) {
    const accessToken = jwt.sign(
      {
        user: {
          email: userAvailable.email,
          id: userAvailable.id,
          name: userAvailable.name,
        },
      },
      process.env.API_ACCESS_TOKEN,
      { expiresIn: "1h" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401).json("Email or password is not valid");
  }
});

module.exports = { registerUser, loginUser };
