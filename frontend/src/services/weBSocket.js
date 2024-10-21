import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

export function connectSocket() {
  socket.on("connect", () => {
    console.log("socket connected");
  });
}

export { socket }
