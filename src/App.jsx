import { useState, useRef, useEffect } from "react";
import "./App.css";
import { Square } from "./Square";

function App() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [turnX, setTurnX] = useState(true);

  function squareClicked(idx) {
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

  return (
    <div id="app">
      <h1 className="title">TicTacToe</h1>
      <h2>
        Player Turn:
        <span className="turnIndicator">{turnX ? "X" : "O"}</span>
      </h2>

      <div className="board">{renderSquares()}</div>

      <button>Reset</button>
    </div>
  );
}

export default App;
