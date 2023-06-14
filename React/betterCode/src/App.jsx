import "./App.css";
import { Comptador, Fetch, Form, FullName, Metodes3, Todos, User } from "./components";
import PintaArray from "./components/PintaArray";
import TocarArray from "./components/TocarArray";


const App = () => {
  const initialTodos = [
    {
      id: 1,
      complete: false,
      name: "todo 1",
    },
    {
      id: 2,
      complete: true,
      name: "todo 2",
    },
    {
      id: 3,
      complete: false,
      name: "todo 3",
    },
  ];

  return (
    <>
      <Comptador initialCount={27} />
      <hr />
      <User
        age={45} />
      <hr />
      <Todos initialTodos={initialTodos} />
      <hr />
      <FullName />
      <hr />
      <Form />
      <hr /> 
      <Fetch />
      <hr />
      <Metodes3 />
      <hr />
      <PintaArray />
      <hr />
      <TocarArray />
      
    </>
  );
};

export default App;
