import React from 'react';
import Main from '../Main/Main';
import './Body.css'
import logo from '../../images/Logo.svg'

const Body = () => {
  return (
    <div className='body-container'>
      <div className="main-body">
        <nav className='navbar'>
          <img src={logo} alt="" /> 
          <h1>FITNESS-EXPRESS</h1>
        </nav>
        <h3>Choose Today's Workout</h3>
          <Main></Main>
      </div>
      <div className="sidebar">
        <h3>Hello</h3>
      </div>
    </div>
  );
};

export default Body;