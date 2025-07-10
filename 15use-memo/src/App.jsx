import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function ExpansiveTask(num) {
    console.log('ExpansiveTask');    
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  let doubleValue = useMemo(() => ExpansiveTask(input), [input]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <p>Count : {count}</p>
      </div>
      
      <div>
        <input type="number"
         placeholder='Enter any number'
         value={input}
         onChange={(e) => setInput(e.target.value)}/>
      </div>

      <p>Double Value : {doubleValue}</p>
    </div>
  )
}

export default App
