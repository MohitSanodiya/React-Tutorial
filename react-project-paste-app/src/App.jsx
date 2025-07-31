import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Paste from './components/Paste';
import NavBar from './components/NavBar';
import ViewPaste from './components/ViewPaste';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <NavBar/>
        <Home />
      </div>
    },
    {
      path:"/Pastes",
      element:
      <div>
        <NavBar/>
        <Paste/>
      </div>
    },
    {
      path:"/Pastes/:id",
      element:
      <div>
        <NavBar/>
        <ViewPaste/>
      </div>
    }
  ]
)

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
