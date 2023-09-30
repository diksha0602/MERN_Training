import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComp from "./components/ClassComp";

function App() {
  return (
    <div className="App">
      <FunctionalComponent
        name="Diksha"
        age="20"
        occupation="student"
      ></FunctionalComponent>
      <ClassComp></ClassComp>
    </div>
  );
}

export default App;
