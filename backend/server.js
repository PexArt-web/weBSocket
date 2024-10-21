require("dotenv").config();
const port = process.env.PORT || 4000;
const { log } = console;
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let playerScore = [];
io.on("connection", (socket) => {
  socket.on("score", (score) => {
    playerScore.push(score);
    setTimeout(() => {
      socket.emit("playerScore", playerScore);
    }, 5000);
  });
});

httpServer.listen(port, () => {
  log(`Server connected and listening on port ${port}`);
});
