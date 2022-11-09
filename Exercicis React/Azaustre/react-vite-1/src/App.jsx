//import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Inici } from "./components/Inici";
import { Detalls } from "./components/Detalls";
import { NormalizeModernG } from "./components/NormalizeModernGStyled";
import { FonsG } from "./components/FonsGStyles";

function App() {
  return (
    <>
      <NormalizeModernG />
      <FonsG />
      <Routes>
        <Route path="/" element={<Inici />} />
        <Route path="/coet/:coetId" element={<Detalls />} />
      </Routes>
    </>
  );
}

export default App;
