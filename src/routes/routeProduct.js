const express = require("express");
const router = express.Router();
const data = require("./../class/products");
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/download/image", (req, res) => {
  res.download(path.join(__dirname, "public/images/image.jpg"))
});

router.get("/data/:page", (req, res, next) => {
  let page = +req.params.page;
  let perPage = 4;
  let start =  (page-1)*perPage;
  let end = page * perPage;
  res.json(data.slice(start,end));
});



module.exports = router;