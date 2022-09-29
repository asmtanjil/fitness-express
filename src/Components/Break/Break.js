// import React, { useState } from 'react';
// import Time from '../Exercise/Time';

// import './Break.css'

// const Break = ({list}) => {
   
//   const [time, setTime] = useState(0);
  

//   const clickHandler = () => {
//     // console.log('Mama');
//     const newTime = setTime(time + 10);
//     setTime(newTime);
//   }
//   return (
//     <div>
//       <h3>Add A Break</h3>
//       <div className="break-details">
//         <button onClick={() => clickHandler(time)} className='btn-time'><p>10s</p></button>
//         <button onClick={() => clickHandler(time)} className='btn-time'><p>20s</p></button>
//         <button onClick={() => clickHandler(time)} className='btn-time'><p>30s</p></button>
//         <button onClick={() => clickHandler(time)} className='btn-time'><p>40s</p></button>
//         <button onClick={() => clickHandler(time)} className='btn-time'><p>50s</p></button>
//       </div>
//       <Time list={list} time={time}></Time>
//     </div>
//   );
// };

// export default Break;