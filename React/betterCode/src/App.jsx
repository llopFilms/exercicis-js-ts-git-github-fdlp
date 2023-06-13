import "./App.css";
import Comptador from "./components/Comptador";
import Form from "./components/Form";
import FullName from "./components/FullName";
import Todos from "./components/Todos";
import User from "./components/User";

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
      <User age={45} />
      <hr />
      <Todos initialTodos={initialTodos} />
      <hr />
      <FullName />
      <hr />
      <Form />
      <hr />
    </>
  );
};

export default App;
