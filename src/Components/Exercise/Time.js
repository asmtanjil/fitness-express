import React from 'react';
import './Time.css'

const Time = () => {
  return (
    <div>
      <h3>Exercise Time</h3>
      <div className="time-container">
        <div className="time-details">
           <h3>Exercise Time: </h3>
           <p className='count-time'>200s</p>
        </div>
        <div className="time-details">
        <h3>Break Time</h3>
           <p className='count-time'>30s</p>
        </div>
      </div>
      <div className='activity-container'>
        <button className='btn-activity'><p>Finish Exercise</p></button>
      </div>
    </div>
  );
};

export default Time;