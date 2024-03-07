import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "Aadhar", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList /> 
      <States />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 Far Away 💼</h1>;
}

function Form() {

  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) { 
    e.preventDefault(); 

    if (!description) return;

    const newItem = {
      id: new Date(),
      description,
      quantity,
      packed:false
    }

    console.log("new item", newItem)

    setQuantity(1);
    setDescription("");

  }


  return (
    <form className="add-form" onSubmit={ handleSubmit}>
      <h3> What do you need for your 😍 trip ?</h3>
      <select
        value={quantity}
        onChange={ (event)=> setQuantity( Number(event.target.value))}
      >
        {
          Array.from({ length: 20 }, (_, i) => i + 1).map((num) =>
            <option key={num} value={num} >{ num}</option>
          )
        }
      </select>
      <input type="text" placeholder="Enter Item..." value={ description}  onChange={ (event)=> setDescription(event.target.value)}/>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((listItem) => (
          <Item item={listItem} key={listItem.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={ item.packed ? {textDecoration:'line-through'} : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function States() {
  return (
    <footer className="stats">
      <em> 💼 You have X items on your list, and you already packed X(X%)</em>
    </footer>
  );
}
