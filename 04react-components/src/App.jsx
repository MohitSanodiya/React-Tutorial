import React from 'react';
import UserCard from './Components/usercard.jsx';

function App() {
  return (
    <>
      <UserCard 
        Name="Akshay"
        Img="https://images.unsplash.com/photo-1619042867037-c78e5010db1b?w=600&auto=format&fit=crop&q=60"
        Description="Genuinely he is a good person"
      />

      <UserCard 
        Name="Neha"
        Img="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600"
        Description="She loves creativity and nature"
      />

      <UserCard 
        Name="Ravi"
        Img="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600"
        Description="Passionate coder and tech geek"
      />
    </>
  );
}

export default App;
