import { useState } from "react";

const useWeather = () => {
  const [weather, setWeather] = useState({
    data: [],
    loading: true,
    error: true,
  });

  const setData = (newData) =>
    setWeather({ data: newData, loading: false, error: false });
  const setError = (newError) =>
    setWeather({ data: [], loading: false, error: newError });
  return { weather, setData, setError };
};

export default useWeather;
