import "./Counter.css";

const Counter = (props) => {
  return (
    <div>
      <h1 className="counter">Count:{props.onDisplay}</h1>
    </div>
  );
};

export default Counter;
