import { useState, useRef, useEffect } from "react";
import "./App.css";
import { Square } from "./Square";

function App() {
  const [squares, setSquares] = useState(new Array(9).fill(null));

  function renderSquares() {
    const arr = [];

    for (let i = 0; i < squares.length; i++) {
      arr.push(<Square key={i} idx={i} value={squares[i]} />);
    }

    return arr;
  }

  return (
    <div id="app">
      <h1 className="title">TicTacToe</h1>
      <h2>Player Turn:</h2>

      <div className="board">
        {renderSquares()}
      </div>

      <button>Reset</button>
    </div>
  );
}

export default App;
