import React, { useState } from 'react';
import './Exercise.css'

const Exercise = (props) => {
  const {time, image, about, name, age} = props.cart;
  

  return (
    <div>
      <div className="card-body">
          <img className="cart-img" src={image} alt="" />  
        <div>
          <h2>{name}</h2>
          <p>{about}</p>
          <div>
            <p className='card-time'>Time {time}</p>
            <p className='card-age'>Age{age}</p>
          </div>
          <div>
            <button
              onClick={() => props.addHandlerToBtn(props.cart)}
              className="btn-card"
            >
Add to List
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Exercise;