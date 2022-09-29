import Workout from '../Workout/Workout';
import './Main.css'

const Main = (props) => {
  // const [exercises, setExercises] = useState([]);

  // useEffect(() => {
  //   fetch('workouts.json')
  //   .then(res => res.json())
  //   .then(data => setExercises(data))
  // }, [])
  return (
    <div>
      <Workout exercise={props.exercise}></Workout>
    </div>
  );
};

export default Main;