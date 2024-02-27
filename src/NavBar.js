import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid justify-content-center">
                    <Link className='btn btn-outline-secondary d-inblock mx-2' to="/">Home</Link>
                    <Link className='btn btn-outline-secondary d-inblock mx-2' to="/birds">Birds</Link>
            </div>
        </nav>
    </div>
  )
}
