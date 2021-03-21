const mongoose = require("mongoose");

const SpecialSchema = mongoose.Schema({
  info: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("Special", SpecialSchema);
