import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count+1);
  }, [count]);


  return (
    <div className='box'>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Increment</button>
      <br />
      <br />
      <ChildComponent buttonName="Click Me" handleClick={handleClick}/>
    </div>

  )
}

export default App
