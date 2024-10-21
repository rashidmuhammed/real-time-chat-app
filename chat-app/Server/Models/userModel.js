const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlenght: 3, maxlenght: 20 },
    email: {
      type: String,
      required: true,
      minlenght: 3,
      maxlenght: 20,
      unique: true,
    },
    password: { type: String, required: true, maxlenght: 1024 },
  },
  {
    timestamps: true,
  }
);

module.exports("User", userSchema, "users");
