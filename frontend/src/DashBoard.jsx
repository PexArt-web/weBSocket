import { useEffect, useState } from "react";
import Input from "./components/input";
import { connectSocket, socket } from "./services/weBSocket";

const DashBoard = () => {
  const [score, setScore] = useState({});
  const [allScores, setAllScores] = useState([]);
  function handleInput(e) {
    const { name, value } = e.target;
    let currentObject = { [name]: value };
    setScore((prevScore) => ({
      ...prevScore,
      ...currentObject,
    }));
  }

  useEffect(() => {
    connectSocket();
  }, []);

  function sendScore() {
    console.log(score, "scores");
    socket.emit("score", score);
  }

  socket.on("playerScore", (data) => {
    setAllScores(data);
  });
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

      <button className="upload-btn" onClick={sendScore}>
        {" "}
        Upload Score{" "}
      </button>

      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Scores</th>
          </tr>
          {
            allScores && allScores.map(scores => (
              <tr key={scores.id}>
                <td>{scores?.name}</td>
                <td>{scores?.score}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;
