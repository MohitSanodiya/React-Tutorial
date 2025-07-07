import { useState } from 'react';
import Card from './components/Card.jsx';

function App() {
  const[name,setName] = useState('');
  return (
  <div >
  <Card name={name} setName={setName}> </Card>
  </div>
  )
}

export default App
