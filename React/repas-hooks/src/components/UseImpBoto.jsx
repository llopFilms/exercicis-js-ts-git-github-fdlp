import { forwardRef, useImperativeHandle } from "react";
import { useState } from "react";

const Botofill = forwardRef((props, ref) => {
  const [commuta, setCommuta] = useState(false);
  useImperativeHandle(ref, () => ({
    canviCommuta() {
      setCommuta(!commuta);
    }
  }))
  return (
    <>
      <button onClick={() => setCommuta(!commuta)}>Botó fill</button>
      {commuta ? <p>Ha commutat a A!</p> : <p>Ha commutat a B!</p>}
    </>
  );
});
export default Botofill;
