import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <h1 className="title">TicTacToe</h1>
      <h2>Player Turn:</h2>

      <div className="board"></div>

      <button>Reset</button>
    </div>
  );
}

export default App;
