import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import Sidebar from "../Sidebar/Sidebar";
import "./Workout.css";
import logo from "../../images/Logo.svg";

const Workout = () => {
  const [carts, setCarts] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch("myData.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const addHandlerToBtn = (cart) => {
    const newTime = [...time, cart];
    setTime(newTime);
  };

  return (
    <div className="workout-container">
      <div className="container-bg">
        <div className="container-body">
          <div className="nav">
            <img src={logo} alt="" />
            <h2>FITNESS-EXPRESS</h2>
          </div>
          <h3 className="second-head">Choose Today's Exercise</h3>
          <div className="cart-container">
            {carts.map((cart) => (
              <Exercise
                cart={cart}
                key={cart.id}
                addHandlerToBtn={addHandlerToBtn}
              ></Exercise>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Sidebar time={time}></Sidebar>
      </div>
    </div>
  );
};

export default Workout;
