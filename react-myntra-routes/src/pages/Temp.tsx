import React from 'react'
import NavBar from '../components/header/Navbar'
import { Outlet } from 'react-router-dom'

export default function Temp() {
  return (
    <>
    <NavBar/>
    <div>Temp</div>
    <Outlet/>
    </>
  )
}
