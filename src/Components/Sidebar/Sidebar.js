import React from 'react';
import logo from '../../images/mypic.png';
import Break from '../Break/Break';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
      <div>
      <img src={logo} alt="" />
      </div>
      <div>
      <h5>ASM Tanjil</h5>
      <h>Barishal Bangladesh</h>
      </div>
      </div>
      <div className="sidebar-details">
        <div className='item-details'>
        <p><strong className='detail-number'>60</strong>Kg</p>
        <p className='detail-container'>Weight</p>
        </div>
        <div className='item-details'>
        <p><strong className='detail-number'>5.7</strong></p>
        <p className='detail-container'>Height</p>
        </div>
        <div className='item-details'>
        <p><strong className='detail-number'>27</strong>Years</p>
        <p className='detail-container'>Age</p>
        </div>
      </div>
      <Break></Break>
    </div>
  );
};

export default Sidebar;