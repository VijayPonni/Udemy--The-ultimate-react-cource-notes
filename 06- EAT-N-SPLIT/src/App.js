import { useState } from 'react'; 

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children , onClick }) { 
  return <button onClick={ onClick}  className='button'>{ children}</button>
}

function App() {

  const [isAddFriendClick, setIsAddFirendClick] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedBill , setSelectedBill ] = useState(null)
 
  function AddFriend(friendDetail) {
    setFriendsList([...friendsList, friendDetail])
    setIsAddFirendClick(false);
  }
  
  function handleFriendFormButtonClick() { 
    setIsAddFirendClick((currValue) => !currValue)
  }

  function handleSelection(friend) {
    // setSelectedBill(currValue=> currValue ?  currValue.id !== friend.id ? friend : null : friend);
    setSelectedBill(currValue => currValue?.id === friend.id ? null : friend);
    setIsAddFirendClick(false);
  }

  function hanldeBillSplit(value) { 
    setFriendsList(friendsList => friendsList.map((friend) => friend.id === selectedBill.id ? { ...friend, balance: friend.balance + value } : friend))
    setSelectedBill(null)
  }

  return (
    <div className="app"> 
      <div className="sidebar">

        <FriendsList
          friendsList={friendsList}
          selectedBill={ selectedBill}
          setSelectedBill={ (friend) => handleSelection(friend) }
        />

        {
          isAddFriendClick &&
            <AddFriendForm
              onAddClick={AddFriend}
          />
        }
        <Button onClick={handleFriendFormButtonClick}> {  isAddFriendClick ? 'Close' : 'Add Friend'}</Button>
        
      
      </div>
      <div>
        {
          selectedBill &&
          <SplitBillForm
            key={ selectedBill.id }
            selectedBill={selectedBill}
            setFriendsList={(value)=> hanldeBillSplit(value)}
          />
        }
      </div>
    </div>
  );
}


function FriendsList({ friendsList ,selectedBill,  setSelectedBill }) { 
  return (
    <ul>{
      friendsList.map((friendDetail) => (
        <Friend
          friend={friendDetail}
          key={friendDetail.id}
          selectedBill={ selectedBill}
          setSelectedBill={setSelectedBill}
        />))
    }</ul>
  )
}

function Friend({ friend, selectedBill ,setSelectedBill }) { 
  
  const selectedFriend = friend.id === selectedBill?.id;

  return (<li className={ selectedFriend ? 'selected' : ''}>
    <img src={friend.image} alt={ friend.name} />
    <h3>{friend.name}</h3>
    {
      friend.balance === 0 ?
        <p> You and {friend.name} are even. </p> :
        friend.balance > 0 ?
          <p style={{ color: 'green' }}>{friend.name} owes you {friend.balance} ₹</p> :
          <p style={{ color: 'red' }}>You owe {friend.name} {Math.abs(friend.balance)} ₹</p>
    }

    {
      <Button onClick={() => setSelectedBill(friend)}> {selectedFriend ? 'Close' : 'Select'} </Button>
    }

  </li>)
}

function AddFriendForm({ onAddClick  }) { 
  
  const [friendName, setFriendName] = useState('');
  const [profileImgUrl, setProfileImgUrl] = useState('https://i.pravatar.cc/48');

  function handleFormSubmit(e) { 
    e.preventDefault();
    if (friendName && profileImgUrl) { 
      const newFriendDetail = {
        id: crypto.randomUUID(),
        name: friendName,
        image: profileImgUrl,
        balance: 0
      }
      onAddClick(newFriendDetail)
    }
  }

  return (
    <div>
      <form
        className="form-add-friend"
        type="submit"
        onSubmit={(e)=> handleFormSubmit(e)}
      >
        
      <label>👫 Friend name</label>
        <input
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value) }
        />
        
      <label>🖼️ Image URL</label>
        <input
          type="text"
          value={profileImgUrl}
          onChange={(e)=> setProfileImgUrl(e.target.value)}
        />
        <Button>Add</Button>

    </form>
    </div>
  )
}

function SplitBillForm({ selectedBill ,setFriendsList }) { 
  const [billValue, setBillValue] = useState('');
  const [expense1, setExpense1] = useState('');
  const [billPaidPerson, setBillPaidPerson] = useState('person1');
  const expense2 = billValue - expense1;

  function calculateBalance() {
    if (billPaidPerson === "person1") {
      return billValue - expense1;
    }
    else {
      return expense2 - billValue;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!billValue || !expense1) return;
    setFriendsList(calculateBalance());

    // setFriendsList((currList) => currList.map((friend) => friend.id === selectedBill.id ? { ...friend, balance: calculateBalance()} : friend))
  }

  return (
    <form
      className="form-split-bill"
      type="submit"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2>Split a Bill with {selectedBill.name} </h2>
      
      <label>💰 Bill value</label>
      <input
        type="number"
        min={ 1}
        value={billValue}
        onChange={ (e) => setBillValue(Number(e.target.value))}
      />


      <label>🧍‍♀️| 🧍‍♂️ Your expense</label>
      <input
        type="number"
        value={expense1}
        min={0}
        max={ billValue}
        onChange={(e)=> setExpense1(Number(e.target.value))}
      />

      <label>👫 { selectedBill.name}'s' expense: </label>
      <input
        type="number"
        min={0}
        value={billValue - expense1 }
        disabled
      />

      <label>🤑 who is paying the bill ? </label>
      <select
        value={billPaidPerson}
        onChange={(e)=> setBillPaidPerson(e.target.value)}
      >
        <option value="person1">You</option>
        <option value="person2">{ selectedBill.name}</option>
      </select>

      <Button>Split bill</Button>

    </form>)
}

export default App;
