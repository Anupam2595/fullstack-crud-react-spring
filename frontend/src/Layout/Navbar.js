import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">FullStackApplication</Link>
      <Link className="btn btn-outline-success" to="/addUser">AddUser</Link>
  </div>
</nav>
    </div>
  )
}
