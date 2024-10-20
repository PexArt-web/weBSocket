const socket = io("http://localhost:4000")

socket.on("connect", (response) => {
  console.log("Connected to the server", response)
})

socket.on("message", (data)=>{
    console.log(data)

    socket.emit("message", "welcome")
})