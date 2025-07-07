import React from 'react';

function App() {
  const abcd = () => {
    alert("Hiii ?")
  }

const hello = () => {
  alert("How Are You ? My Friend....")
}

function handleForm(e) {
  e.preventDefault();
  alert(e.target.elements[1].value); // .elements[] --it's use for select input as per order
}

return ( 
    <div style={{textAlign:"center"}}>
    <form onSubmit={handleForm}>
      <p>Name Info</p> 
      <input type="text" placeholder='Enter Your Name ' />
      <input type="text" placeholder='Enter Your Friend Name ' />
      <button type='submit'>Submit</button>
    </form>

      {/* <p onMouseOver={hello}>Hello User ? Kaise HO.....</p>
      <button onClick={abcd}>Click</button> */}
    </div>
  )
}

export default App;
