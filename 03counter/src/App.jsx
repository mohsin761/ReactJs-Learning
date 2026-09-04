import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter(0);
  };

  return (
    <div className="app">
      <div className="counter-card">
        <div className="icon">⚡</div>

        <h1>Counter App</h1>

        <p className="subtitle">React State Practice</p>

        <div className="counter-box">
          <span>{counter}</span>
        </div>

        <div className="buttons">
          <button className="add" onClick={addValue}>
            + Add Value
          </button>

          <button className="remove" onClick={removeValue}>
            − Remove Value
          </button>

          <button className="reset" onClick={resetValue}>
            ↻ Reset
          </button>
        </div>

        <p className="message">
          {counter > 0
            ? "Counter is positive 🚀"
            : counter < 0
            ? "Counter is negative 📉"
            : "Counter is at zero ✨"}
        </p>
      </div>
    </div>
  );
}

export default App;