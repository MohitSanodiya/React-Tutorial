import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './components/About';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ParamComp from './components/ParamComp';
import Courses from './components/courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <NavBar/>
        <Home/>
      </div>
    },

    {
      path: "/about",
      element: 
      <div>
      <NavBar/>
      <About/>
    </div>
    },

     {
      path: "/dashboard",
      element:
      <div>
      <NavBar/>
      <Dashboard/>
    </div>,

    children:[
      {
        path:"courses",
        element:
        <div>
          <Courses/>
        </div>
      },

      {
        path:"mocktest",
        element:
        <div>
          <MockTest/>
        </div>
      },

      {
        path:"reports",
        element:
        <div>
          <Reports/>
        </div>
      }
    ]
     },


     {
      path:"/student/:id",
      element:
      <div>
        <NavBar/>
        <ParamComp/>
      </div>
     },

     {
        path:"*",
        element: <NotFound/>
     }
  ]
);


function App() {

  return (
    <div className='container'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
