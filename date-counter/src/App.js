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


  function handleReset() { 
    setCount(0);
    setStep(1);
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >

      <div style={{ display: 'center' , alignItems : 'center' , gap:'10px'}}>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e)=> setStep(Number(e.target.value))}
        />
      { 'Step :' + step}
        </div>


      {/* <div>
        <button onClick={() => setStep((currStep) => currStep - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((currStep) => currStep + 1)}>+</button>
      </div> */}

      <div>
        <button onClick={() => setCount((currCount) => currCount - step)}>
          -
        </button>

        {/* <span>Count : {count}</span> */}

        <input type="text" value={ count } onChange={(e)=> setCount(Number(e.target.value)) } />
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

      {
        (count !== 0  || step !==1) && <button onClick={handleReset}>Reset</button>
      }

    </div>
  );
}

export default App;
