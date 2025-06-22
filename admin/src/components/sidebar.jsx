import React from 'react'
import { NavLink } from 'react-router-dom'

const sidebar = () => {
  return (
    <div>
      <NavLink to ='/add'>add</NavLink>
      <NavLink to ='/list'>list</NavLink>
      <NavLink to='/order'>orders</NavLink>
    </div>
  )
}

export default sidebar
