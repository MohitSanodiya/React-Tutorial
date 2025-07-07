import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div id='text'>
      Dashboard
      <Outlet/>
    </div>
  )
}

export default Dashboard
