export const Square = ({ idx, value, handleClick }) => {
  return (
    <div className="square" onClick={() => (value ? null : handleClick(idx))}>
      {value}
    </div>
  );
};
