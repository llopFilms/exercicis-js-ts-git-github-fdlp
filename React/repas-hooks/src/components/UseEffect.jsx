import axios from "axios";
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [dades, setDades] = useState("");
  const [comptador, setComptador] = useState(0);
  //console.log("dades:",dades);

  const handleComptador = (e) => {
    //console.log(comptador);
    if (comptador === 9) setComptador(0);
    else setComptador(comptador + 1);
  };

  useEffect(() => {
    //console.log("renders!");
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      //console.log("Api ha respost:",response.data[comptador].name);
      setDades(response.data[comptador].name);
    });
  }, [comptador]);
  return (
    <div>
      <h2>useEffect</h2>
      <hr />
      <p>{dades}</p>
      <button onClick={handleComptador}>Comptador</button>
      <span>{comptador+1}</span>
    </div>
  );
};

export default UseEffect;
