// import React, { useEffect, useState } from 'react';
// import Main from '../Main/Main';
// import './Body.css'
// import logo from '../../images/Logo.svg'
// import Sidebar from '../Sidebar/Sidebar';


// const Body = () => {
//   // States
  
//   const [exercises, setExercises] = useState([]);
//   const [list, setList] = useState(0);


// // States 

//   useEffect(() => {
//     fetch('workouts.json')
//     .then(res => res.json())
//     .then(data => setExercises(data))
//   }, [])

// // EventListener

//   const addHandlerToBtn = (exercise) =>{
//     // console.log(exercise);
//     const newList = list + exercise;
//     setList(newList);
//   }

//   return (
//     <div className='body-container'>
//       <div className="main-bg">
//       <div className="main-body">
//         <nav className='navbar'>
//           <img src={logo} alt="" className='logo-img'/> 
//           <h1>FITNESS-EXPRESS</h1>
//         </nav>
//         <h3>Choose Today's Workout</h3>
//         <div className="main-container">
//         {
//       exercises.map(exercise => <Main
//         key = {exercise.id}
//         exercise = {exercise}
//         addHandlerToBtn = {addHandlerToBtn}
//       ></Main>)
//       }
//         </div>
//       </div>
//       </div>
//       <div className="sidebar">
//         <Sidebar list={list}></Sidebar>
//       </div>
//     </div>
//   );
// };

// export default Body;