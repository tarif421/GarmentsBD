import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import { Outlet } from 'react-router'

const RootLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <Navbar/>
        <Outlet/>

    </div>
  )
}

export default RootLayouts