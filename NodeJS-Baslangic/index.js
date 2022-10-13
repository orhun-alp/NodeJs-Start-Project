const express = require("express");
const aktorlerRouter = require("./routers/aktorlerRouter");
const logger = require("./middlewares/logger");
const errorHandling = require("./middlewares/errorHandling");
const server = express();

server.use(express.json());

server.use(logger);

server.use("/aktorler", aktorlerRouter);

server.get("/", (req, res) => {
  res.send("Express'ten selamlar merhaba merhaba");
});
server.use(errorHandling);

server.listen(5000, () => {
  console.log("Adrese gelen istekler dinleniyor");
});
