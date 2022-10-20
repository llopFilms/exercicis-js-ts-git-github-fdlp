import React, { useState, useEffect } from "react";

function PageTitle() {
  const [name, setName] = useState("");
<<<<<<< HEAD
  useEffect(() => {document.title = `Hi, ${name}`});

  return (
    <div>
      <p>Use the input field below to rename this page!</p>
=======
  useEffect(() => {document.title = `Hi, ${name}`},[name]);

  return (
    <div>
      <p>Use, {name} the input field below to rename this page!</p>
>>>>>>> 435c288a6354791ca9d525494a446f10be8efacc
      <input
        type="text"
        placeholder="Webpage name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    </div>
  );
}
export default PageTitle;
