import { useState } from "react";
import '../src/App.css'

const Counter = ()=>{
  const [count, setCount] = useState(0);

  return(
    <div className="container">
      <h1>You have Clicked {count} Times</h1>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}

export default Counter;