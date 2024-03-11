import { useState } from 'react';

export default function Form({ onAddItem }) {

  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");



  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: new Date(),
      description,
      quantity,
      packed: false
    };

    // handleAdditem(newItem)
    onAddItem(newItem);

    setQuantity(1);
    setDescription("");

  }


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😍 trip ?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => <option key={num} value={num}>{num}</option>
        )}
      </select>
      <input type="text" placeholder="Enter Item..." value={description} onChange={(event) => setDescription(event.target.value)} />
      <button>Add</button>
    </form>
  );
}
