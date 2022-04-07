const express = require("express");
const cors = require("cors");
const server = express();
const PORT = 2000;

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to my API</h1>`);
});

const { category } = require("./routers");
server.use("/category", category);

server.listen(PORT, () => console.log(`Running at PORT : ${PORT}`));
