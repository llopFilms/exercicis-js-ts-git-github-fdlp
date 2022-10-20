import React, { useState, useEffect } from "react";

function PageTitle() {
  const [name, setName] = useState("");
  useEffect(() => {document.title = `Hi, ${name}`});

  return (
    <div>
      <p>Use the input field below to rename this page!</p>
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
