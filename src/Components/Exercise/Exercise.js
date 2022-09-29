import "./Exercise.css";

const Exercise = (props) => {
  const { time, image, about, name, age } = props.cart;

  return (
    <div>
      <div className="card-body">
        <img className="cart-img" src={image} alt="" />
        <div className="card-items">
          <h2 className="card-name">{name}</h2>
          <p className="card-detail">{about}</p>
          <div className="card-text">
            <p>Age: {age}+</p>
            <p>Time: {time}s</p>
          </div>
        </div>
        <button
          onClick={() => props.addHandlerToBtn(props.cart)}
          className="btn-card"
        >
          <p>Add to List</p>
        </button>
      </div>
    </div>
  );
};

export default Exercise;
