import Workout from '../Workout/Workout';
import './Main.css'

const Main = (props) => {
  
  return (
    <div>
      <Workout exercise={props.exercise} addHandlerToBtn={props.addHandlerToBtn}></Workout>
    </div>
  );
};

export default Main;