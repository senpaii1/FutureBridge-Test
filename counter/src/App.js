import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={handleIncrement}>+</button>
      <span>{counter}</span>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default App;
