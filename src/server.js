const express = require("express");
const productsRoute = require("./routes/routeProduct");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("./src/public"))

app.use("/product", productsRoute);

app.listen(port, ()=> {
  console.log(`app lisner port: ${port}`)
});
