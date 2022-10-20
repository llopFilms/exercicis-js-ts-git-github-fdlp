import React, { useState, useEffect } from "react";
import { KEYS } from "../lib/constants/keys";
import useWeather from "../lib/hooks/useWeather";

const fetchData = (setData, setError, signal) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?${KEYS.apiLatLon}&appid=${KEYS.apiKey}&lang=${KEYS.apiLang}&units=${KEYS.apiUnit}`,
    { signal }
  )
    .then((resposta) => resposta.json())
    .then((dades) => {
      console.log(dades);
      /* setData(dades);
      setCarrega(false); */
      // setWeather({ data: dades, loading: false, error: false });
      setData(data);
    })
    .catch(err) {
      //setWeather({ data: [], loading: false, error: err.message });
      setError(err.message);
    }
}

export default function Forecast() {  

  const { weather, setError, setData } = useWeather();
  /* const [carrega, setCarrega] = useState(true);
  const [data, setData] = useState(null); */
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (weather.loading) {
      const controller = new AbortController();
      fetchData(setData, setError, controller.signal);
      return () => controller.abort();
    }
  }, [weather.loading]);

  const handleChange = ({ target }) => setNotes(target.value);

  if (weather.loading) return <p>Carregant pàgina...</p>;
  if (weather.error) return <p>{weather.error}</p>;

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
