import React, { useState, useEffect } from "react";

export default function Forecast() {
  const [carrega, setCarrega] = useState(true);
  const [data, setData] = useState(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (carrega) {
      const apiLatLon = "lat=41.3888&lon=2.159";
      const apiKey = "cf6b3b08d8458fe12e0dddab0b644c2a";
      const apiLang = "CA";
      const apiUnit = "metric";
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?${apiLatLon}&appid=${apiKey}&lang=${apiLang}&units=${apiUnit}`
      )
        .then((resposta) => resposta.json())
        .then((dades) => {
          console.log(dades);
          setData(dades);
          setCarrega(false);
        });
    }
  }, [carrega]);

  const handleChange = ({ target }) => setNotes(target.value);

  if (carrega) {
    return <p>Carregant pàgina...</p>;
    
  } else {
    const tempMeteo = data.main.temp.toFixed(1) || "";
    const imgMeteo = data.weather[0].icon || "";

    return (
      <div className="App">
        <h1>My Weather Planner</h1>
        <p>{tempMeteo} ॰C</p>
        <img
          src={`http://openweathermap.org/img/w/${imgMeteo}.png`}
          alt=""
          style={{ display: "block", margin: "auto" }}
        />
        <input type="text" value={notes} onChange={handleChange} />
      </div>
    );
  }
}
