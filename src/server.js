const express = require("express");
const path = require("path");

const routeProduct = require("./routes/routeProduct");


const app = express();
let port = process.env.PORT | 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"))
})

app.get("/download/image", (req, res) => {
  res.download(path.join(__dirname, "public/images/image.jpg"))
})

app.use("/product", routeProduct);


app.use(express.static("./src/public"))

app.listen(port, ()=> {
  console.log(`app lisner port: ${port}`)
});
