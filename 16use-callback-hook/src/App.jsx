import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {
  const [count, setCount] = useState(0)

  function Increment(){
    setCount(count+1);
  }


  return (
    <div className='box'>
      <p>Count : {count}</p>

      <button onClick={Increment}>Increment</button>
      <br />
      <br />
      <ChildComponent buttonName="Click Me"/>
    </div>

  )
}

export default App
