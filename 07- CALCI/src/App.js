import './App.css';
import { useState } from 'react';

const KEYS = [
  {
    id: crypto.randomUUID(),
    name:'all_clear',
    placeHolder: 'AC',
    type: 'OPERATOR',
  },
  {
    id: crypto.randomUUID(),
    name:'backspace',
    placeHolder: '⌫',
    type: 'OPERATOR',
  },
  {
    id: crypto.randomUUID(),
    name:'plus_or_minus',
    placeHolder: '±',
    type: 'OPERATOR',
  },
  {
    id: crypto.randomUUID(),
    name:'reminder',
    placeHolder: '/',
    type:'OPERATOR'
  },  {
    id:crypto.randomUUID(),
    name:'seven',
    placeHolder: '7',
    type:'NUMBER'
  },  {
    id: crypto.randomUUID(),
    name:'eight',
    placeHolder: '8',
    type:'NUMBER'

  },
  {
    id: crypto.randomUUID(),
    name:'nine',
    placeHolder: '9',
    type:'NUMBER'
  },
  {
    id: crypto.randomUUID() ,
    name:'multiplication',
    placeHolder: 'x',
    type:'OPERATOR'

  },
  {
    id:crypto.randomUUID(),
    name:'four',
    placeHolder: '4',
    type:'NUMBER'

  },  {
    id: 10,
    name:'five',
    placeHolder: '5',
    type:'NUMBER'
  },  {
    id:crypto.randomUUID(),
    name:'six',
    placeHolder: '6',
    type:'NUMBER'
  },  {
    id: crypto.randomUUID(),
    name:'minus',
    placeHolder: '-',
    type:'OPERATOR'
  },  {
    id:crypto.randomUUID() ,
    name:'one',
    placeHolder: '1',
    type:'NUMBER'
  },  {
    id:crypto.randomUUID(),
    name:'two',
    placeHolder: '2',
    type:'NUMBER'
  },  {
    id: crypto.randomUUID(),
    name:'three',
    placeHolder: '3',
    type:'NUMBER'
  },  {
    id:crypto.randomUUID() ,
    name:'plus',
    placeHolder: '+',
    type:'OPERATOR'
  },
  {
    id:crypto.randomUUID(),
    name: 'percent',
    placeHolder: '%',
    type:'OPERATOR'
  },
  {
    id:crypto.randomUUID(),
    name: 'zero',
    placeHolder: '0',
    type:'NUMBER'
  },
  {
    id:crypto.randomUUID(),
    name: 'period',
    placeHolder: '.',
    type:'OPERATOR'
  }
,  {
    id:crypto.randomUUID(),
    name: 'equal',
  placeHolder: '=',
  type:'OPERATOR'
  }
]

function calculateResult(input) { 
  input = (input.includes("x")) ? input.replace("x", "*") : input;
  try {
    return eval(input);
  }
  catch (error){ 
    return 0;
  }
}

function App() {
  const [input, setInput] = useState("");
  const result = calculateResult(input);
  

  return (
    <div className="App">
      <h1>VIJAY's CALCI</h1>
      <OutputScrren
        input={input}
        setInput={setInput}
        result={ result}
      />
      <KeyBoard
        setInput={ setInput}
      />
    </div>
  );
}


function OutputScrren({ input , setInput , result}) { 

  function hanldeKeyPress(e) { 
    const isValidKey = /[0-9*\/\-\+\b]/;
    const isSymbols = /[\+\-\*\%\/\.]/;

    if (!isValidKey.test(e.key) && e.key !== 'Backspace' ) { 
      e.preventDefault();
    }

    if ( isSymbols.test(e.key) && isSymbols.test(input.slice(-1) ))  {
      console.log("YOU GOT IT")
      setInput(currValue => currValue.replace(/.$/ , ""))
     }
  }

  function handleInput(value) {
    console.log("value", value)
    setInput(value)
  }
  return (
    <div className="outputScreen">
      <input
        type="text"
        onKeyDown={(e) => hanldeKeyPress(e)}
        value={input}
        onChange={(e) => handleInput(e.target.value)}
      />
      <p>{ result }</p>

  </div>)
}

function Button({ children, name  , handleClick}) { 
  return <button
    className={`button ${(name === 'all_clear' || name === 'backspace' || name === 'plus_or_minus' || name === 'reminder' || name === 'multiplication' || name === 'minus' || name === 'plus' || name === 'equal') ? 'purple-text' : 'white-text'}`}
    onClick={handleClick}
  >{children}
  </button>
}

function KeyBoard({ setInput }) { 

  function hanldeKeyboardButtonClick(selectedKey) { 
    const isOperators = /[\+\-\*\%\/\.\x]/;

    if (selectedKey.name === 'equal') return;
    if (selectedKey.name === 'all_clear') {
      setInput("");
      return;
    }
    if (selectedKey.name === 'backspace') { 
      setInput(currValue => currValue.replace(/.$/, "")); 
      return;
    }
    if (selectedKey.name === 'plus_or_minus') { 
      // setInput((currValue) => { 
      //   console.log("currValue", currValue)
      //   let lastNumber = currValue.split(isOperators).slice(-1)[0];
      //   console.log("lastNumber", lastNumber)
        
      //   let convertedLastNumber = Number(lastNumber) > 0 ? `(${Math.abs(Number(lastNumber)) * -1})` : lastNumber.includes(")") ? Math.abs(lastNumber.replace(')', "")) : lastNumber;
        
      //   if (Number(lastNumber) > 0) {
      //     convertedLastNumber = `(${Math.abs(Number(lastNumber)) * -1})`;
      //   }
      //   else {

      //   }

      //   return currValue.replace(lastNumber, convertedLastNumber);
      // })
      return;
    }
    if (selectedKey.type === 'OPERATOR') {
      setInput(currValue => isOperators.test(currValue.slice(-1)) ? currValue.replace(/.$/, "") : currValue + selectedKey.placeHolder)
    }
    else { 
      setInput(currValue => currValue + selectedKey.placeHolder)    
    }
  } 

  return (
    <div className="keyboard">
      {
        KEYS.map(
          (key) =>
            <Button
              key={key.id}
              name={key.name}
              handleClick={ ()=> hanldeKeyboardButtonClick(key)  }
            >
            {key.placeHolder}
            </Button>
        ) 
      }

    </div>
  )
}

export default App;
