import { useState } from "react";

const Buttons = (props) => {
  const [value, setValue] = useState(0);
  const Increament = (event) => {
    setValue((prevState) => {
      return prevState + Number(event.target.value);
    });
    props.onInputHandler(value + Number(event.target.value));
  };

  const Decreament = (event) => {
    setValue((prevState) => {
      return prevState - Number(event.target.value);
    });
    props.onInputHandler(value - Number(event.target.value));
  };

  return (
    <div>
      <button value={1} onClick={Decreament}>
        -1
      </button>
      <button value={5} onClick={Decreament}>
        -5
      </button>
      <button value={100} onClick={Decreament}>
        -100
      </button>
      <button value={1} onClick={Increament}>
        +1
      </button>
      <button value={5} onClick={Increament}>
        +5
      </button>
      <button value={100} onClick={Increament}>
        +100
      </button>
    </div>
  );
};

export default Buttons;
