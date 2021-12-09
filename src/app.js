const express = require("express");
const cors = require("cors");
const products = require("./routers/product.route");
const client = require("./database");


function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use("/api/products", products);
  client.connect().then(()=>{
    console.log("mongo connectado")
  })
  // ADD YOUR ROUTES
  return app;
}

module.exports = createApp;
