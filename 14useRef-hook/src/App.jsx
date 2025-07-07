import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  // let val = useRef(0);

  // const handleClick = () => {
  //   val.current = val.current + 1;
  //   setCount(count+1);
  //   console.log("Value of Val : ", val);
  // }

  // let btnRef = useRef();

  // const changeColor = () => {
  //   console.log("Color Changed Successfully....",btnRef);
  //   btnRef.current.style.backgroundColor = "blue";
  // }

  // useEffect(() => {
  //   console.log("mein firse render ho gaya hu");
  // })

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer (){
    if(timerRef.current!==null)
      return;
    
     timerRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  };

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
    <div className="container">
      <h1>StopWatch Timer : {time}</h1>

      <button onClick={startTimer}>Start Timer</button>
      <br />

      <button onClick={stopTimer}>Stop Timer</button>
      <br />

      <button onClick={resetTimer}>Reset Timer</button>
    </div>

    // <div className='container'>
    //  <button ref={btnRef} onClick={handleClick}>Increment</button>
    //  <br />
    //  <button onClick={changeColor}>Change Color Of 1st Button</button>
    //  <br />
    //  <div>Count : {count}</div>
    // </div>
  );
}

export default App;
