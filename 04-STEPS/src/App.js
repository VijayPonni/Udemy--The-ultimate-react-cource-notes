import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [displaySteps, setDisplayStpes] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1);
      setStep((currentStepValue) => currentStepValue - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);
      console.log("BEFORE", step);
      setStep((currentStepValue) => currentStepValue + 1);
      console.log("AFTER", step);
    }
  }

  return (
    <div>
      {displaySteps && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {/* {messages[step - 1]} */}
            <div className="buttons">
              <Button
                textColor="#e7e7e7"
                bgColor="#333"
                onClick={()=> alert(`Learn how to ${messages[step-1]} `)}
              >
              {messages[step - 1]}
            </Button>
            </div>
          </StepMessage >

          <div className="buttons">
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handlePrevious}
            > 👈 Previous </Button >
            
              <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handleNext}
            >Next 👉</Button>
            {/* <button
              className="button"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="button"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
          </div>
        </div>
      )}

      <button
        className="close"
        onClick={() =>
          setDisplayStpes(
            (currentDisplayStepsvalue) => !currentDisplayStepsvalue
          )
        }
      >
        &times;
      </button>
    </div>
  );
}

function StepMessage({ step , children }) { 
  return (
    <div className="message">
      <h3>Step: {step} </h3>
      { children}
    </div>
  )
}


function Button({ textColor , bgColor , onClick , children }) { 
  return (
    <button
    className="button"
    style={{color: textColor , backgroundColor: bgColor }}
    onClick={onClick}
    >
      { children }
  </button>
  )
}