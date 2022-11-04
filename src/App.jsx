import { useState, useRef, useEffect } from "react";
import "./App.css";
import { Square } from "./Square";

function App() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [turnX, setTurnX] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const winMsg = useRef(null);

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setGameOver(true);
      if (winner == "DRAW") {
        winMsg.current.innerText = "It's a draw!";
      } else {
        winMsg.current.innerText = winner + " wins!";
      }
    } else {
      winMsg.current.innerText = "";
    }
  });

  function squareClicked(idx) {
    if (gameOver) return;

    setSquares((oldSquares) => {
      const newSquares = [...oldSquares];
      newSquares[idx] = turnX ? "X" : "O";

      return newSquares;
    });

    setTurnX((current) => !current);
  }

  function renderSquares() {
    const arr = [];

    for (let i = 0; i < squares.length; i++) {
      arr.push(
        <Square
          key={i}
          idx={i}
          value={squares[i]}
          handleClick={squareClicked}
        />
      );
    }

    return arr;
  }

  function resetGame() {
    setSquares(new Array(9).fill(null));
    setTurnX(true);
    setGameOver(false);
  }

  function checkWinner() {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of conditions) {
      if (
        squares[condition[0]] &&
        squares[condition[0]] == squares[condition[1]] &&
        squares[condition[1]] == squares[condition[2]]
      ) {
        return squares[condition[0]]; // returns "X" or "O"
      }
    }

    // check draw
    if (squares.some((val) => val === null)) {
      // there are turns left
      return false;
    } else {
      return "DRAW";
    }
  }

  return (
    <div id="app">
      <h1 className="title">TicTacToe</h1>
      <h2>
        Player Turn:
        <span className="turnIndicator">{turnX ? "X" : "O"}</span>
      </h2>

      <span className="winMsg" ref={winMsg}></span>

      <div className="board">{renderSquares()}</div>

      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;
