import logoCoet from "../assets/coet.webp";
import { ItemLlista } from "./ItemLlista";
import { Container, Capçalera, Llista } from "./ComponentsStyled";
import { useState, useEffect } from "react";
import * as API from "../services/launches";

export const Inici = () => {
  const [coets, setCoets] = useState({
    data: [],
    carregant: true,
    comptant: true,
  });

  useEffect(() => {
    setTimeout(() => {
      API.getTotsCoets()
        .then((dades) =>
          setCoets({
            data: dades,
            carregant: false,
            comptant: false,
          })
        )
        .catch((error) => console.log(error));
    }, 0);
  }, []);

  if (coets.carregant) return <p>Carregant dades...</p>;
  console.log("Dades carregades!");
  console.log(coets);

  return (
    <Container className="container">
      <header>
        <Capçalera className="capçalera">
          <img className="logo" src={logoCoet} width="300px" alt="" />
          <h1 className="titol">Llançament de Coets</h1>
        </Capçalera>
      </header>
      <section>
        <Llista className="llista">
          {coets.data.map(
            (coet) =>
              coet.flight_number < 110 && (
                <ItemLlista
                  className="item-llista"
                  key={coet.flight_number}
                  {...coet}
                />             )
          )}
        </Llista>
      </section>
    </Container>
  );
};
