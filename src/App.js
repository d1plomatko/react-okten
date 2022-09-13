import logo from './logo.svg';
import './App.css';
import Simpsons from "./components/Simpsons/Simpsons";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div className="App">

      <h1>Task1</h1>
      <Simpsons />

        <br/>

      <h1>Task2</h1>
      <Characters />

    </div>
  );
}

export default App;
