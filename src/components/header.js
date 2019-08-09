import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <>
      <header>
        <h1>Frank Pigeon</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </header>
    </>
  )
}

export default Header
