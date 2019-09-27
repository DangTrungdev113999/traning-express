const express = require("express");
const path = require("path");
const productsRoute = require("./routes/productsRoutes");

const routeProduct = require("./routes/routeProduct");


const app = express();
let port = process.env.PORT | 3000;

app.get("/download/image", (req, res) => {
  res.download(path.join(__dirname, "public/images/image.jpg"))
})

app.use("/product", routeProduct);


app.use(express.static("./src/public"))
app.use("/product", productsRoute);

app.listen(port, ()=> {
  console.log(`app lisner port: ${port}`)
});
