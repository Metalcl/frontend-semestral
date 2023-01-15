import React from 'react'
import { Outlet } from 'react-router-dom'

function navigation() {
  return (
    <div>
      <p>NavBar</p>
      <Outlet/>
    </div>
  )
}

export default navigation