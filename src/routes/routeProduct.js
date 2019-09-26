const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("product list")
})

router.get("/:num1/:num2", (req, res, next) => {
  console.log(+req.params.num1 + +req.params.num2)  
  res.send("product 1")
})



module.exports = router;