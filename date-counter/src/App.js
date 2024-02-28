import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <button onClick={() => setStep((currStep) => currStep - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((currStep) => currStep + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((currCount) => currCount - step)}>
          -
        </button>

        <span>Count : {count}</span>
        <button onClick={() => setCount((currCount) => currCount + step)}>
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count >= 0
            ? `${count} days after today is `
            : `${Math.abs(count)} days ago today was `}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
