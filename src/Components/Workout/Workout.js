import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Sidebar from '../Sidebar/Sidebar';
import './Workout.css'

const Workout = () => {
  const [carts,setCarts] = useState([])
  const [time,setTime] = useState([])

  useEffect(() => {
    fetch('workouts.json')
    .then(res => res.json())
    .then(data => setCarts(data));
  }, [])

 const addHandlerToBtn = (cart) => {
  const newTime = [...time, cart];
  setTime(newTime);
 }

  return (
    <div>
       <div className='workout-container'>
        <div className='cart-container'>
       {
      carts.map(cart => <Exercise cart={cart} key={cart.id} addHandlerToBtn={addHandlerToBtn}></Exercise>)
       }
       </div>
       <div>
        <Sidebar time={time}></Sidebar>
       </div>
       </div>
       
    </div>
  );
};

export default Workout;
