const express = require("express");
const router = express.Router();
const Quote = require("../models/quote");
const capitalize = require("../capitalize");
const range = require("../randomrange");

router.get("/", (req, res) => { 
  res.json({message:"Error: Request has not been completed"})
})
router.get("/:quoteCat", (req, res) => {
 res.json({message: "Limit must be set."})
 })


// Get Specific Quotes Via Category & Set Limit
router.get("/:quoteCat/:limit", async (req, res) => {

  if ((isNaN(req.params.limit) == true)){
    res.json({ message: "please enter a valid number for the limit parameter" })
    return
  }
  var catergory = req.params.quoteCat.toString();
  const mainCategory = capitalize(catergory);
  const setLimit = req.params.limit;
  const quoteLimit = Number(setLimit);

  const allCategories = ["Love", "Motivation", "Success"]
  if ((allCategories.indexOf(mainCategory)) == -1) {
    res.json({
      message: "Invalid category.... Available Categories include Motivation, Success, and Love"
    })
    return
  }

  
    while (quoteLimit < 50) {
      try {
        const quote = await Quote.find({ category: mainCategory })
          .limit(quoteLimit)
          .skip(range(1, 69));
        res.json(quote);
        return
      } catch (err) {
        res.json({
          message:
            "Category not found... Available Categories include Motivation, Success, and Love",
            
        });
      }
    } res.json({message:"Cannot exceed limit of 50 Quotes per Call"})

});

module.exports = router;
