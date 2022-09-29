import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './Main.css'

const Main = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('workouts.json')
    .then(res => res.json())
    .then(data => setExercises(data))
  }, [])
  return (
    <div className='main-container'>
      {
      exercises.map(exercise => <Workout
      key = {exercise.id}
      exercise = {exercise}
      ></Workout>)
      }
    </div>
  );
};

export default Main;