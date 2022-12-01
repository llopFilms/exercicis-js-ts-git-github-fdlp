import { useState } from "react";
import Panell from "../Panell/Panell";
import { Container } from "./TaulaStyled";

const Taula = () => {
  const [web, setWeb] = useState(0);
  const [seo, setSeo] = useState(0);
  const [ads, setAds] = useState(0);
  const [pagines, setPagines] = useState(0);
  const [idiomes, setIdiomes] = useState(0);
  const [extres, setExtres] = useState(0);
  const [total, setTotal] = useState(0);
  let nouExtra;

  const handleChange = ({ target }) => {
    let { id, value } = target;
    value = +value;
    if (isNaN(value)) {
      console.log("NaN!");
      return;
    }
    if (id === "pagines" && value >= 0) {
      setPagines(value);
      nouExtra = value * 30 + idiomes * 30;
    } else {
      setIdiomes(value);
      nouExtra = pagines * 30 + value * 30;
    }
    setExtres(nouExtra);
  };

  const handleClick = ({ target }) => {
    const { id } = target;

    switch (id) {
      case "paginesInc":
        setPagines(pagines + 1);
        nouExtra = (pagines + 1) * 30 + idiomes * 30;
        break;
      case "paginesDec":
        pagines > 0 ? setPagines(pagines - 1) : setPagines(0);
        nouExtra = pagines > 0 ? (pagines - 1) * 30 + idiomes * 30 : 0;
        break;
      case "idiomesInc":
        setIdiomes(idiomes + 1);
        nouExtra = pagines * 30 + (idiomes + 1) * 30;
        break;
      case "idiomesDec":
        idiomes > 0 ? setIdiomes(idiomes - 1) : setIdiomes(0);
        nouExtra = idiomes > 0 ? pagines * 30 + (idiomes - 1) * 30 : 0;
        break;
      default:
        return;
    }
    setExtres(nouExtra);
  };

  useEffect(() => {
    setTotal(web + seo + ads + extres);
  }, [web, seo, ads, extres]);

  return (
    <Container className="taula">
      <h2>Què vols fer?</h2>
      <div>
        <label htmlFor="inputWeb">
          <input
            id="inputWeb"
            type="checkbox"
            value="500"
            onChange={(e) => setWeb(e.target.checked ? +e.target.value : 0)}
          />
          Una pàgina web (500€)
        </label>
        {web !== 0 && (
          <Panell
            handleChange={handleChange}
            handleClick={handleClick}
            pagines={pagines}
            idiomes={idiomes}
          />
        )}
        <label htmlFor="inputSeo">
          <input
            id="inputSeo"
            type="checkbox"
            value="300"
            onChange={(e) => setSeo(e.target.checked ? +e.target.value : 0)}
          />
          Una consultoria SEO (300€)
        </label>
        <label htmlFor="inputAds">
          <input
            id="inputAds"
            type="checkbox"
            value="200"
            onChange={(e) => setAds(e.target.checked ? +e.target.value : 0)}
          />
          Una campanya de Google Ads (200€)
        </label>
        <p>Preu:&nbsp;{total}€</p>
      </div>
    </Container>
  );
};

export default Taula;
