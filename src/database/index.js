const { MongoClient } = require("mongodb");

const uri = `${process.env.MONGO_CONNECTION || "mongodb"}://${
  process.env.MONGO_USER || "root"
}:${process.env.MONGO_PASSWORD || "root"}@${
  process.env.MONGO_HOST || "localhost"
}:${process.env.MONGO_PORT || "27018"}/?poolSize=20&writeConcern=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
