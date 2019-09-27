const express = require("express");
const router = express.Router();
const data = require("./../class/products");

router.get("/", (req, res, next) => {
  res.send("product list")
})

// router.get("/:num1/:num2", (req, res, next) => {
//   console.log(+req.params.num1 + +req.params.num2)  
//   res.send("product 1")
// })

router.get("/data:page", (req, res, next) => {
  let page = +req.params.page;
  console.log(req.params.page);
  let perPage = 10;
  let start =  (page-1)*perPage;
  let end = page * perPage;
  res.send(data.slice(start,end));
})



module.exports = router;