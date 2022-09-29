import React from 'react';
import Main from '../Main/Main';
import './Body.css'
import logo from '../../images/Logo.svg'
import Sidebar from '../Sidebar/Sidebar';

const Body = () => {
  return (
    <div className='body-container'>
      <div className="main-bg">
      <div className="main-body">
        <nav className='navbar'>
          <img src={logo} alt="" className='logo-img'/> 
          <h1>FITNESS-EXPRESS</h1>
        </nav>
        <h3>Choose Today's Workout</h3>
          <Main></Main>
      </div>
      </div>
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Body;