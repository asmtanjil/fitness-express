import React from 'react';
import './Main.css'
import logo from '../../images/Logo.png'

const Main = () => {
  return (
    <div className='main-container'>
      <div className="workouts-container">
          <h1><img src={logo} alt="" /> FITNESS-EXPRESS</h1>
      </div>
      <div className="list-container">
          <h3>Ma</h3>
      </div>
    </div>
  );
};

export default Main;