const express = require("express");
const products = express.Router();
const client = require("../database");
const ObjectId = require("mongodb").ObjectId;
const Product = require("../dtos/product.dto");

products.get("/", async (req, res) => {
  const dbo = await client.db("platzi");
  const products = await dbo.collection("products");
  const productos = await products.find({}).toArray();
  res.json(productos);
});

products.get("/:id", async (req, res) => {
  const dbo = await client.db("platzi");
  const products = await dbo.collection("products");
  const productos = await products.find(ObjectId(req.params.id)).toArray();
  res.json(productos);
});

products.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  const dbo = await client.db("platzi");
  const products = await dbo.collection("products");
  const productAdded = await products.insertOne(newProduct);
  res.json(productAdded);
});

products.put("/:id", async (req, res) => {
  const newProduct = new Product(req.body);
  const dbo = await client.db("platzi");
  const products = await dbo.collection("products");
  const query = { _id: ObjectId(req.params.id) }
  const productModified = await products.updateOne(query,{$set:newProduct});
  res.json(productModified);
});

products.delete("/:id", async (req, res) => {
  const dbo = await client.db("platzi");
  const products = await dbo.collection("products");
  const productos = await products.deleteOne({ _id: ObjectId(req.params.id) });
  res.json(productos);
});

module.exports = products;
