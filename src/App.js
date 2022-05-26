import { useState } from "react";
import "./App.css";
import Bulb from "./components/Bulb";
import Switch from "./components/Switch";

function App() {
  const [isLight, setIsLight] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <Bulb isLight={isLight} />
        <Switch setIsLight={setIsLight} isLight={isLight}/>
      </header>
    </div>
  );
}

export default App;
