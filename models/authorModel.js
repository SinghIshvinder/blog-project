const mongoose = require("mongoose");

const authorModel = new mongoose.Schema(
  {
    fname: { type: String, required: true, trim: true },
    lname: { type: String, required: true, trim: true },
    title: {
      type: String,
      enum: {
        values: ["Mr", "Mrs", "Miss"],
        message: "{VALUE} is not supported",
      },
      required: true,
    },
    email: { type: String, required: true, unique: true, match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ },
    password: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author1", authorModel);
