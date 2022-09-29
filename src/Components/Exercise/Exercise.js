import React, { useState } from 'react';
import './Exercise.css'

const Exercise = (props) => {
  const {time, image, about, name, age, addHandlerToBtn} = props.cart;
  

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
      
    </div>
  );
};

export default Exercise;