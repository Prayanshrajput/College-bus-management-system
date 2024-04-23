import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from './com/Nav'

export const Layout = () => {
  return (
<>
<Nav></Nav>
<Outlet></Outlet>
</>
  )
}
