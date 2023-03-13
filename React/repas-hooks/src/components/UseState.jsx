import { useState } from "react";

const UseState = () => {
  const [comptador, setComptador] = useState(0);
  const [input, setInput] = useState("")

  return (
    <div>
      <h2>useState</h2>
      <hr />
      <button onClick={() => setComptador(comptador + 1)}>
        Increment
      </button>
      <span>{comptador}</span>
      <br />
      <input type="text" placeholder="Escriu. . . " onChange={(e) => setInput(e.target.value)} value={input} />
      <span>{input}</span>
    </div>
  );
};

export default UseState;
