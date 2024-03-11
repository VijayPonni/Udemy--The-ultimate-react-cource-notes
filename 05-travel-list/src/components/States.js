export default function States({ items }) {

  if (!items.length) return (
    <footer className='stats'>
      <em>Start Adding items to your packing list 🚀</em>
    </footer>
  );

  const itemsCount = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedpercentage = itemsCount > 0 ? Math.round(packedItems / itemsCount * 100) : 0;

  return (
    <footer className="stats">
      <em> {packedpercentage === 100 ? 'You got everything. Ready to go 🛩️ ' : `💼 You have ${itemsCount} items on your list, and you already packed ${packedItems} (${packedpercentage})%`} </em>
    </footer>
  );
}
