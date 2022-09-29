import React from 'react';
import Time from '../Exercise/Time';
import './Break.css'

const Break = () => {
  return (
    <div>
      <h3>Add A Break</h3>
      <div className="break-details">
        <button className='btn-time'><p>10s</p></button>
        <button className='btn-time'><p>20s</p></button>
        <button className='btn-time'><p>30s</p></button>
        <button className='btn-time'><p>40s</p></button>
        <button className='btn-time'><p>50s</p></button>
      </div>
      <Time></Time>
    </div>
  );
};

export default Break;