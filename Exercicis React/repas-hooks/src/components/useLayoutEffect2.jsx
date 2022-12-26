import axios from "axios";
import { useLayoutEffect, useEffect, useState } from "react";

const UseLayoutEffect2 = () => {
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
    //console.log(dades, comptador);
  }, [comptador]);

  return (
    <div>
      <p>{dades}</p>
      <button onClick={handleComptador}>Comptador</button>
      <span>Comptador: {comptador + 1}</span>
      <span>Índex: {comptador}</span>
    </div>
  );
};

export default UseLayoutEffect2;
