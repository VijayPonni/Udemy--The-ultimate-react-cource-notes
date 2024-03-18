import { useState } from "react";
import BillAmount from "./BillAmount";
import Reset from "./Reset";
import ServiceCategory from "./ServiceCategory";
import Total from "./Total";

function App() {

  const serviceCategory = [
    {
      id: 1,
      category: "dissatisfied",
      label: "Dissatisfied (0%)",
      value: 0
    },
    {
      id: 2,
      category: "okay",
      label: "It was okay (5%)",
      value: 5
    },
    {
      id: 3,
      category: "good",
      label: "It was good (10%)",
      value: 10
    },
    {
      id: 4,
      category: "amazing",
      label: "Absolutely amazing! (20%)",
      value: 20
    }
  ]

  const [billAmount, setBillAmount] = useState(0);
  const [myRatingInPercent, setmyRatingInPercent] = useState(0);
  const [friendRatingInPercent, setFriendRatingInPercent] = useState(0);
  
  const averageTipAmount = calculateAverageTipAmount();

  const total = billAmount + averageTipAmount;


  function updateBillAmount(amount) {
    setBillAmount(amount);
  }

  function tipAmount(ratingInPercent){ 
    return (ratingInPercent * billAmount) / 100;
  }

  function calculateAverageTipAmount() { 
    let myTip = tipAmount(myRatingInPercent);
    let friendTip = tipAmount(friendRatingInPercent);
    return Math.round((myTip+friendTip)/2)
  }

  function onReset() { 
    billAmount && setBillAmount(0);
    myRatingInPercent && setFriendRatingInPercent(0);
    friendRatingInPercent && setFriendRatingInPercent(0);
  }
  

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}> TIP CALCULATOR</h1>

      < BillAmount
        bill={billAmount}
        onBillUpdate={updateBillAmount}
      />

      <ServiceCategory
        personRefernceText="you"
        serviceCategoryList={serviceCategory}
        rating={myRatingInPercent}
        updatingRating={(rating) => setmyRatingInPercent(rating)}
        billAmount={ billAmount}
      />
      
      <ServiceCategory
        personRefernceText="your friend"
        serviceCategoryList={serviceCategory}
        rating={ friendRatingInPercent}
        updatingRating={(rating) => setFriendRatingInPercent(rating)}
        billAmount={ billAmount}
        
      />

      <Total
        totalAmount={total}
        billAmount={billAmount}
        averageTipAmount={ averageTipAmount}
      />        
      {
        billAmount > 0 &&
        <Reset onResetClick={ onReset} />
      }
    </div>
  );
}

export default App;
