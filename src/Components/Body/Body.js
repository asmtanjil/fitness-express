import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import './Body.css'
import logo from '../../images/Logo.svg'
import Sidebar from '../Sidebar/Sidebar';


const Body = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('workouts.json')
    .then(res => res.json())
    .then(data => setExercises(data))
  }, [])

  return (
    <div className='body-container'>
      <div className="main-bg">
      <div className="main-body">
        <nav className='navbar'>
          <img src={logo} alt="" className='logo-img'/> 
          <h1>FITNESS-EXPRESS</h1>
        </nav>
        <h3>Choose Today's Workout</h3>
        <div className="main-container">
        {
      exercises.map(exercise => <Main
        key = {exercise.id}
        exercise = {exercise}
      ></Main>)
      }
        </div>
      </div>
      </div>
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Body;