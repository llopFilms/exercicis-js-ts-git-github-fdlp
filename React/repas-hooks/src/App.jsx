import "./App.css";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseLayoutEffect2 from "./components/useLayoutEffect2";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseContext from "./components/UseContext";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";

const App = () => (
  <div className="App">
    <h1>Curs Hooks</h1>
    <UseState />
    <UseReducer />
    <UseEffect />
    <UseRef />
    <UseLayoutEffect />
    <UseLayoutEffect2 />
    <UseImperativeHandle />
    <UseContext />
    <UseMemo />
    <UseCallback />
  </div>
);

export default App;
