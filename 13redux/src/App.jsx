import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount,
} from "./feature/counter/couterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleIncreAmountClick = () => {
    dispatch(incrementByAmount(Number(amount)));
  };

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count : {count} </p>
      <button onClick={handleDecrementClick}>-</button>

      <button onClick={handleResetClick}>Reset</button>

      <input
        type="Number"
        value={amount}
        placeholder="Enter Number"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleIncreAmountClick}>Increment by Amount</button>
    </div>
  );
}

export default App;
