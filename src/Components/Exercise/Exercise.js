import React, { useState } from 'react';
import './Exercise.css'

const Exercise = (props) => {
  const {time, image, about, name, age, addHandlerToBtn} = props.cart;
  const [laiser, setLaiser] = useState(0);
  const dataStore = localStorage.getItem('time')
  const tenSec =()=>{setLaiser(10)
  localStorage.setItem('time', 10);
  }
  const twintySec =()=>{
    setLaiser(20)
  localStorage.setItem('time', 20);
  }
  const thirtySec =()=>{
    setLaiser(30)
  localStorage.setItem('time', 30);
  }
  const fourtySec =()=>{
    setLaiser(40)
  localStorage.setItem('time', 40);
  }

  return (
    <div>
      <div className="card-body">
          <img className="cart-img" src={image} alt="" />  
        <div className="">
          <h2 className="card-title text-xl text-blue-600">{name}</h2>
          <p className="text-start text-base">{about}</p>
          <div className="flex m-auto w-70 gap-3 text-sm text-violet-600 font-medium">
            <p>Time Schedule: {time}</p>
            <p>Subject :{age}</p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => addHandlerToBtn(time)}
              className="btn-card"
            >
              ADD To Exercise
            </button>
          </div>
        </div>
      </div>
      <dir>
        <button onClick={() => tenSec()} className='btn-time'>10s</button>
        <button onClick={() => twintySec()} className='btn-time'>20s</button>
        <button onClick={() => thirtySec()} className='btn-time'>30s</button>
        <button onClick={() => fourtySec()} className='btn-time'>40s</button>
      </dir>
    </div>
  );
};

export default Exercise;