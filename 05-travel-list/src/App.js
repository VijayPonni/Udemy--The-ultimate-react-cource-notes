const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
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
  return (
    <div className="add-form">
      <h3> What do you need for your 😍 trip ?</h3>
    </div>
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
      <span>
        {item.quantity} {item.description}
      </span>
      <button>X</button>
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