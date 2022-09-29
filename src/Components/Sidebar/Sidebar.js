import React, { useState } from "react";
import logo from "../../images/mypic.png";
import "./Sidebar.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = ({ time }) => {
  const [laiser, setLaiser] = useState(0);
  const dataStore = localStorage.getItem("time");

  const tenSec = () => {
    setLaiser(10);
    localStorage.setItem("time", 10);
  };

  const twintySec = () => {
    setLaiser(20);
    localStorage.setItem("time", 20);
  };

  const thirtySec = () => {
    setLaiser(30);
    localStorage.setItem("time", 30);
  };

  const fourtySec = () => {
    setLaiser(40);
    localStorage.setItem("time", 40);
  };

  const fiftySec = () => {
    setLaiser(50);
    localStorage.setItem("time", 50);
  };

  const notify = () => toast("Yessss!!! I have Completed My Exercise!");
  let totalEx = 0;
  for (const total of time) {
    totalEx = totalEx + total.time;
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
            <h>Barishal Bangladesh</h>
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
        <button onClick={() => twintySec()} className="btn-time">
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
            <p className="count-time">{totalEx}s</p>
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
