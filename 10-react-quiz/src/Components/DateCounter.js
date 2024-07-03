import {useReducer} from "react";

function reducer(state, action){

  switch(action.type){
    case 'dec':
      return { ...state , count : state.count - state.step};
    case 'inc': 
      return { ...state , count : state.count + state.step};
    case 'setCount':
      return { ...state , count : action.payload};
    case 'setStep' :
      return { ...state , step : action.payload};
      case 'reset' :
        return action.payload ;
    default:
      return new Error("Unknown action")
  }
}


function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const initilaState = { count : 0 ,step : 1 }
  const [state , dispatch ] = useReducer( reducer , initilaState);
  const { count , step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({type:'dec'})
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({type:'inc'})
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({type : 'setCount' , payload : Number(e.target.value)})
  };

  const defineStep = function (e) {

    // setStep(Number(e.target.value));
    dispatch({type:'setStep', payload: Number(e.target.value)})
  };

  const reset = function () {
    // setCount(0);
    // dispatch({type:'setCount' , payload : 0})
    // dispatch({type:'setStep', payload: 1})
    dispatch({type : 'reset' , payload : initilaState})

  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
