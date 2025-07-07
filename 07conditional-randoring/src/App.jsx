import React from "react";
import Login from "./components/login-btn.jsx";
import LogOut from "./components/logout-btn.jsx";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);




  // //--> Early Return
  // if (!isLoggedIn) {
  //   return <Login />;
  // }

  // //--> Logical Operator
  // return 
  // <div>
  //   {isLoggedIn && <LogOut />}
  // </div>;



  //--> Ternary Operator
  return(
    <div>
      {isLoggedIn ? <Login/> : <LogOut/>}
    </div>
  ) 



  // //--> if-else
  // if (isLoggedIn) {
  //   return(
  //   <Login/>
  //   )
  // } else {
  //   return(
  //   <LogOut/>
  //   )
  // }
}

export default App;
