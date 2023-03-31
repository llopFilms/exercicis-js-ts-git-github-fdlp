import './App.css'
import Boto from './components/Boto'
import Condicio from './components/Condicio'
import Perfil from './components/Perfil'
import { useState } from "react";

function App() {

  const [botoApp, setBotoAppState] = useState(true);

  const handleClick = () => {
    setBotoAppState(!botoApp);
  }

  return (
    <div style={{border:`5px solid ${botoApp? "red":"blue"}`, padding: "20px", borderRadius: "15px"}}>
      <h2>Benvinguts a l'App</h2>
      <Boto />
      <Perfil handleClick={handleClick} />
      <Condicio/>
    </div>
  )
}

export default App
