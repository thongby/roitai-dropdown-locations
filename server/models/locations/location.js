const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    address: {
      type: String,
    },
    province: {
      type: String,
    },
    amphoe: {
      type: String,
    },
    tambon: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Location = mongoose.model("locations", locationSchema);
