//import "./App.css";
import React, { useState, useEffect } from "react";
import * as API from "./services/launches";
import logoCoet from "./assets/coet.webp";
import { NormalizeModernGS } from "./components/NormalizeModernGStyled";
import { FonsGS } from "./components/FonsGStyles";
import { ItemLlista } from "./components/ItemLlista";
import {
  ContainerS,
  CapçaleraS,
  LlistaS
} from "./components/ComponentsStyled";

function App() {
  const [coets, setCoets] = useState({
    data: [],
    carregant: true,
    comptant: true,
  });

  useEffect(() => {
    setTimeout(() => {
      API.getTotsCoets().then((dades) =>
        setCoets({
          data: dades,
          carregant: false,
          comptant: false,
        })
      );
    }, 0);
  }, []);

  if (coets.carregant) return <p>Carregant dades...</p>;
  console.log("Dades carregades!");
  console.log(coets);

  return (
    <>
      <NormalizeModernGS />
      <FonsGS />
      <ContainerS className="container">
        <header>
          <CapçaleraS className="capçalera">
            <img className="logo" src={logoCoet} width="300px" alt="" />
            <h1 className="titol">Llançament de Coets</h1>
          </CapçaleraS>
        </header>
        <section>
          <LlistaS className="llista">
            {coets.data.map(
              (coet) =>
                (coet.flight_number < 110) && (
                  <ItemLlista className="item-llista" key={coet.flight_number} {...coet} />
                )
            )}
          </LlistaS>
        </section>
      </ContainerS>
    </>
  );
}

export default App;
