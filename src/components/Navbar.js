import React from 'react'
import { Link } from 'gatsby'


export default function Navbar() {
  return (
    <nav>
      <h1>Flutra</h1>
      <div>
        <Link to="/">Startsida</Link>
        <Link to="/labbar">Projekt</Link>
        <Link to="/test">Coffee</Link>
      </div>
    </nav>
  )
}
