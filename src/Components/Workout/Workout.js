import React from 'react';
import './Workout.css'

const Workout = ({exercise, addHandlerToBtn}) => {
  // const {exercise} = exercise;
  const {name, image, age, time, about} = exercise;

  return (
    <div className='workout-container'>
      <img src={image} alt="" />
    <div className='workout-info'>
      <h4>{name}</h4>
      <p className='workout-data'>{about}</p>
      <p>For Age: <strong>{age}+</strong></p>
      <p>Time Required: <strong>{time}s</strong></p>
    </div>
    <button onClick={() => addHandlerToBtn(exercise)} className='btn-add'><p>Add To List</p></button>
    </div>
  );
};

export default Workout;
