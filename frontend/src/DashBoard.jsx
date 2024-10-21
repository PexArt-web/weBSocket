import { useEffect, useState } from "react";
import io from "socket.io-client";
import Input from "./components/input";

const DashBoard = () => {
  const [score, setScore] = useState({});
  function handleInput(e) {
    const { name, value } = e.target;
    let currentObject = { [name]: value };
    setScore((prevScore) => ({
      ...prevScore,
      ...currentObject,
    }));
  }

  const socket = io("http://localhost:4000");

  function connectSocket() {
    socket.on("connect", () => {
      console.log("socket connected");
    });
  }

  useEffect(() => {
    connectSocket();
  }, []);

  function sendScore(){
    console.log(score)
    socket.emit("score", score)
  }
  return (
    <div className="container">
      <h1 className="dashBoard-title">MultiPlayer DashBoard 💬</h1>
      <Input
        name="name"
        placeholder={"Enter Your Name"}
        handleInput={handleInput}
      />
      <Input
        name="score"
        placeholder={"Enter Your Score"}
        handleInput={handleInput}
      />

      <button onClick={sendScore}> Upload Score </button>
    </div>
  );
};

export default DashBoard;
