import { useState } from 'react';
import Logo from './Logo';
import Form  from './Form';
import PackingList from './PackingList';
import States  from './States';

export default function App() {

  const [items, setItems] = useState([]);
  

  function handleAdditem(item) { 
    setItems((currItems) => [...currItems, item]);
    // setItems((currItems)=> currItems.push(item) )    // DO NOT MURAY 
  }

  function handleRemoveItem(id) { 
    setItems( (currItems) => currItems.filter((item)=> item.id !== id ) )
  }

  function handleUpdateItem(id) { 
    setItems((currItems) => currItems.map((item) => item.id === id ? {...item , packed: !item.packed} : item) )
  }

  function handleClearList() { 
    if (!items.length) return;
    const confirmed = window.confirm("Are you sure? You want to delete the items in the list?")
     confirmed &&  setItems([])
    
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={ handleAdditem } />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onUpdateItem={handleUpdateItem}
        onClearlist={ handleClearList}
      /> 
      <States
        items={ items}
      />
    </div>
  );
}


