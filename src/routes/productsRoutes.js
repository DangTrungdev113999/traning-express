const express = require("express");
const path = require("path")

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/download/image", (req, res) => {
  res.download(path.join(__dirname, "public/images/image.jpg"))
})
module.exports = router;