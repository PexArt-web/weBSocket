require("dotenv").config();
const port = process.env.PORT || 4000;
const { log } = console;
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

const socket = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

socket.on("connection", (socket) => {
  socket.on("message", (data) => {
    log(data);
  });
});

httpServer.listen(port, () => {
  log(`Server connected and listening on port ${port}`);
});
