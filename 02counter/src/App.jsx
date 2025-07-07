import {useState } from 'react'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(15);

  const addValue = () => {
   if(Counter<20){
     Counter = Counter + 1;
    console.log("Clicked : " + Counter);
    setCounter(Counter);
   }
  }

  const removeValue = () => {
   if(Counter!=0){
     Counter = Counter-1;
    console.log("Clicked : " + Counter);
    setCounter(Counter);
   }
  }
  
  return (
   <>
   <h1>Chai aur Code</h1>
   <h2>Counter Value:{Counter}</h2>
   <button onClick={addValue} >Add Value</button>
   <br />
   <button onClick={removeValue} >Remove Value</button>
   </>
  )
}

export default App;
