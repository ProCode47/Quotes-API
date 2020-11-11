const mongoose = require("mongoose");

const QuoteSchema = mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required:true
  }
  
});

module.exports = mongoose.model("Quote", QuoteSchema);
