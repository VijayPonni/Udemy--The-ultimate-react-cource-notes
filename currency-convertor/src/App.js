import './App.css';
import { useEffect, useState } from 'react';

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`


function App() {

  const [ amount , setAmount ] = useState(1);
  const [ fromValue , setFromValue ] = useState('USD');
  const [ toValue, setToValue ] = useState('EUR');
  const [ isLoading , setIsLoading ] = useState(false);
  const [output , setOutput ] = useState(0);



  useEffect( function (){
    console.log("UseEffect works!")
    setIsLoading(true)
    async function FecthCurrencyValue(){
      try{
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromValue}&to=${toValue}`);
        const data = await res.json();

        setOutput(data.rates[toValue]);
        setIsLoading(false)
      }
      catch(err){
        console.error(err.message)
        setIsLoading(false)
      }
    }

    if(fromValue === toValue ) {
      setIsLoading(false); 
      setOutput(amount); 
      return
    }

    amount > 0 ? FecthCurrencyValue() : setOutput(0);

  } , 
  [ amount , fromValue , toValue ] )


  return (

    <div>

    <input 
    type="text" 
    value={amount}
    onChange={ (e)=> setAmount(Number(e.target.value))}
    disabled={isLoading}
    />

    <select
    value={fromValue}
    onChange={ (event) => setFromValue(event.target.value) }
    disabled={isLoading}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>

    <select
    value={toValue}
    onChange={ (event) => setToValue(event.target.value) }
    disabled={isLoading}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>

    <p>{output} {toValue}</p>

  </div>
  );
}

export default App;
