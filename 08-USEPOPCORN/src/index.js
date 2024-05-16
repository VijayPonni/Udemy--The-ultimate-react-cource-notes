import React from 'react';
import ReactDOM from 'react-dom/client';
// import StarRating from './StarRating';
// import { useState } from 'react'
import './index.css';
import App from './App-v1';

// function Test() { 
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <>
//       <StarRating maxStarCount={5} color='green' onUpdateRating = { (rating)=> setMovieRating(rating)} /> 
//       <p>This movew was rated with { movieRating} stars </p>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxStarCount={5} messages={ ["Terrible" , "Bad" , "Average" , "Good" , "Amazng!"]}  defaultRating={3}/>
    <StarRating maxStarCount={5} size={ 150  }  messages={ ["Terrible" , "Bad" , "Average" , "Good" , "Amazng!"]}color="blue"/>

    <Test></Test> */}
    
  </React.StrictMode>
);
