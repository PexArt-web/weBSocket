require("dotenv").config();
const port = process.env.PORT;
const { log } = console;
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

const socket = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

socket.on("connection", (socket) => {
  socket.on("message", (data) => {
    log(data);
  });
  socket.emit("message", "Hello, world!");
});

httpServer.listen(port, () => {
  log(`Server connected and listening on port ${port}`);
});
