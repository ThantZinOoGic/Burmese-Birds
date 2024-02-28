import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className=''>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid justify-content-end">
                    <div className='me-3'>
                      <NavLink 
                              className={({isActive, isPending}) => isActive ? "btn btn-outline-primary" : "text-decoration-none"} to="/">
                                Home
                      </NavLink>
                    </div>
                    <div className='me-5'>
                      <NavLink 
                              className={({isActive, isPending}) => isActive ? "btn btn-outline-primary" : "text-decoration-none"} to="/birds">
                        Birds
                      </NavLink>
                    </div>
            </div>
        </nav>
    </div>
  )
}
