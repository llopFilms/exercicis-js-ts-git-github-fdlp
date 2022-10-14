import React from "react";

const Question = (props) => (
  <div>
    <p>{props.pregunta}</p>
    <input type="text" value="Yes" />
    <input type="text" value="No" />
    <br />
    <br />
  </div>
);

export default Question;
