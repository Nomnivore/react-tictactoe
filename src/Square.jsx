import { useRef } from "react";
import { random } from "./util";

export const Square = ({ idx, value, handleClick }) => {
  const theSquare = useRef(null);

  function handleMouseOver(event) {
    const newColor = `rgba(${random(255)}, ${random(255)}, ${random(
      255
    )}, .65)`;

    theSquare.current.style.background = newColor;
  }

  return (
    <div
      className="square"
      onClick={() => (value ? null : handleClick(idx))}
      ref={theSquare}
      onMouseOver={handleMouseOver}
      onMouseOut={() => (theSquare.current.style.background = "transparent")}
    >
      {value}
    </div>
  );
};
