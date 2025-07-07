import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={incrementNumber}>Increment</button>

      <div>
        <p>Count : {count}</p>
      </div>
      
      <div>
        <input type="number"
         placeholder='Enter any number'
         value={input}
         />
      </div>
    </div>
  )
}

export default App
