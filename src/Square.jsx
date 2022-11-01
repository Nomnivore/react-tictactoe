import { useRef } from "react"; // <-
import { random } from "./util"; // <-

export const Square = ({ idx, value, handleClick }) => {
  const theSquare = useRef(null); // <-

  // extra add-on 2
  function handleMouseOver(event) {
    // <- this is for randomizing and setting the background color for theSquare
    const newColor = `rgba(${random(255)}, ${random(255)}, ${random(
      255
    )}, .65)`;

    theSquare.current.style.background = newColor;
  }

  return (
    <div
      className="square"
      ref={theSquare} // <-
      onMouseOver={handleMouseOver}
      onMouseOut={() => (theSquare.current.style.background = "transparent")}
      onClick={() => (value ? null : handleClick(idx))}
    >
      {value}
    </div>
  );
};
