import React, { useState, useEffect } from 'react';

const Timer = () => {

  const [time, setTime] = useState(0);
  useEffect(() => {
    const intervaliId = setInterval(() => {
      setTime((previ) => previ + 1);
    }, 1000);
    return () => clearInterval(intervaliId);
  },[]);

  const [name, setName] = useState("");
  const changeHandler = ({ target }) => setName(target.value);

  return (
    <div>
      <h4>Temps: {time}</h4>
      <input type="text"
      value={name}
      onChange={changeHandler}
      />
      <p>{name}</p>
    </div>
  )
}

export default Timer;
