import React, { useState } from "react";
import logo from "../../images/mypic.png";
import "./Sidebar.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = ({ time }) => {
  const [breakTime, setBreakTime] = useState(0);
  const dataStore = localStorage.getItem("time");

  const tenSec = () => {
    setBreakTime(10);
    localStorage.setItem("time", 10);
  };

  const twentySec = () => {
    setBreakTime(20);
    localStorage.setItem("time", 20);
  };

  const thirtySec = () => {
    setBreakTime(30);
    localStorage.setItem("time", 30);
  };

  const fourtySec = () => {
    setBreakTime(40);
    localStorage.setItem("time", 40);
  };

  const fiftySec = () => {
    setBreakTime(50);
    localStorage.setItem("time", 50);
  };

  const notify = () => toast("Yessss!!! I have Completed My Exercise!");
  let totalTime = 0;
  for (const total of time) {
    totalTime = totalTime + total.time;
  }
  return (
    <div className="sidebar-body">
      <div className="sidebar-container">
        <div className="sidebar-header">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h5>ASM Tanjil</h5>
            <p className="location">Barishal Bangladesh</p>
          </div>
        </div>
        <div className="sidebar-details">
          <div className="item-details">
            <p>
              <strong className="detail-number">60</strong>Kg
            </p>
            <p className="detail-container">Weight</p>
          </div>
          <div className="item-details">
            <p>
              <strong className="detail-number">5.7</strong>
            </p>
            <p className="detail-container">Height</p>
          </div>
          <div className="item-details">
            <p>
              <strong className="detail-number">27</strong>Years
            </p>
            <p className="detail-container">Age</p>
          </div>
        </div>
      </div>
      {/* starts */}
      <div className="break-details">
        <button onClick={() => tenSec()} className="btn-time">
          <p>10s</p>
        </button>
        <button onClick={() => twentySec()} className="btn-time">
          <p>20s</p>
        </button>
        <button onClick={() => thirtySec()} className="btn-time">
          <p>30s</p>
        </button>
        <button onClick={() => fourtySec()} className="btn-time">
          <p>40s</p>
        </button>
        <button onClick={() => fiftySec()} className="btn-time">
          <p>50s</p>
        </button>
      </div>
      <div>
        {/* ends */}
        <h3>Exercise Time</h3>
        <div className="time-container">
          <div className="time-details">
            <h3>Exercise Time</h3>
            <p className="count-time">{totalTime}s</p>
          </div>
          <div className="time-details">
            <h3>Break Time</h3>
            <p className="count-time">{dataStore}s</p>
          </div>
        </div>
        <div className="activity-container">
          <button onClick={notify} className="btn-activity">
            <p>Finish Exercise</p>
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
