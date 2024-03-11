import { useState } from 'react';
import  Item  from './Item';

export default function PackingList({ items, onRemoveItem, onUpdateItem, onClearlist }) {

  const [sortType, setSortType] = useState('input');

  let sortedItems;

  if (sortType === 'input') sortedItems = items;

  if (sortType === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortType === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleSortingType(e) {
    setSortType(e.target.value);
    console.log("value", e.target.value);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((listItem) => (
          <Item
            item={listItem}
            key={listItem.id}
            onRemoveItem={onRemoveItem}
            onUpdateItem={onUpdateItem} />
        ))}
      </ul>
      <div className='actions'>

        <select
          value={sortType}
          onChange={(e) => handleSortingType(e)}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION </option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onClearlist}>Clear the list</button>
      </div>
    </div>
  );
}
