import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  LlistaDetalls,
  Container,
  Capçalera,
  Llista,
} from "./ComponentsStyled";
import * as API from "../services/launches";
import {
  IoRocketOutline,
  IoArrowForwardCircleOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import dayjs from "dayjs";
import logoCoet from "../assets/coet.webp";
import { ItemLlista } from "./ItemLlista";

export const Detalls = () => {
  const { coetId } = useParams();

  const [coetUsuari, setCoetUsuari] = useState({
    data: [],
    carregant: true,
    comptant: true,
  });

  useEffect(() => {
    setTimeout(() => {
      API.getCoetsPerNumero(coetId)
        .then((dades) =>
          setCoetUsuari({
            data: dades,
            carregant: false,
            comptant: false,
          })
        )
        .catch((error) => console.log(error));
    }, 0);
  }, [coetId]);

  if (coetUsuari.carregant) return <p>Carregant dades...</p>;
  console.log("Dades carregades!");
  const coet = coetUsuari.data;
  console.log(coet);

  return (
    <Container className="container">
      <header>
        <Capçalera className="capçalera">
          <img className="logo" src={logoCoet} width="300px" alt="" />
          <h1 className="titol">Llançament de Coets</h1>
        </Capçalera>
      </header>
      <section>
        <LlistaDetalls>
          <ul className="llista-interior">
            <div className="li0">
              <i className="icona">
                <IoRocketOutline />
              </i>
              <span className="lletra-petita">&nbsp;Missió:</span>
              <span className="lletra-negreta">{coet.mission_name}</span>
              <span className="lletra-petita">({coet.launch_year})</span>
            </div>
            <li className="element-llista li1">
              <i className="icona">
                <IoArrowForwardCircleOutline />
              </i>
              Èxit del llançament:
              {coet.launch_success ? (
                <span className="casella verda">Afirmatiu</span>
              ) : (
                <span className="casella vermella">Negatiu</span>
              )}
            </li>
            <li className="element-llista">
              <i className="icona">
                <IoArrowForwardCircleOutline />
              </i>
              Nom del cohet:&nbsp;&nbsp;
              <span className="detalls-llançament-llista">
                {coet.rocket.rocket_name}
              </span>
            </li>
            <li className="element-llista">
              <i className="icona">
                <IoArrowForwardCircleOutline />
              </i>
              Tipus de cohet:&nbsp;&nbsp;
              <span className="detalls-llançament-llista">
                {coet.rocket.rocket_type}
              </span>
            </li>
            <li className="element-llista">
              <i className="icona">
                <IoArrowForwardCircleOutline />
              </i>
              Número de llançament:&nbsp;&nbsp;
              <div className="detalls-llançament-llista">
                {coet.flight_number}
              </div>
            </li>
            <li className="element-llista" style={{ alignItems: "start" }}>
              <i className="icona">
                <IoArrowForwardCircleOutline />
              </i>
              Enllaços d'interès:&nbsp;&nbsp;
              <ul>
                <li className="element-llista">
                  <i className="icona">
                    <IoArrowForwardCircleOutline />
                  </i>
                  <a
                    target="_blank"
                    href="https://images2.imgbox.com/91/27/VhC1TTYN_o.png">
                    Imatge
                  </a>
                </li>
                <li className="element-llista">
                  <i className="icona">
                    <IoArrowForwardCircleOutline />
                  </i>
                  <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/CASSIOPE">
                    Wikipèdia
                  </a>
                </li>
                <li className="element-llista">
                  <i className="icona">
                    <IoArrowForwardCircleOutline />
                  </i>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=uFefasS6bhc">
                    Youtube
                  </a>
                </li>
              </ul>
            </li>
            <div className="li2">
              <li className="element-llista">
                <i className="icona">
                  <IoArrowForwardCircleOutline />
                </i>
                Lloc del llançament:&nbsp;&nbsp;
              </li>
              <p className="detalls-llançament" style={{ fontSize: "1.9rem" }}>
                {coet.launch_site.site_name_long}
              </p>
            </div>
            <div className="li2">
              <li className="element-llista">
                <i className="icona">
                  <IoArrowForwardCircleOutline />
                </i>
                Detalls del llançament:&nbsp;&nbsp;
                <i className="icona">
                  <IoCalendarOutline />
                </i>
                <span className="lletra-mini">
                  {dayjs(coet.launch_date_local)
                    .locale("ca-es")
                    .format("D MMMM, YYYY")}
                </span>
              </li>
              <p className="detalls-llançament">
                {coet.details ? coet.details : "Sense detalls"}
              </p>
              <Link to={"/"}>
                <button className="casella boto-detalls">Tornar</button>
              </Link>
            </div>
          </ul>
        </LlistaDetalls>
      </section>
    </Container>
  );
};
