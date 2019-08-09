import React from "react"
import { Link } from "gatsby"
import HeaderStyles from "./header.module.scss"

function Header() {
  return (
    <>
      <header className={HeaderStyles.header}>
        <h1>
          <Link className={HeaderStyles.title} to="/">
            Frank Pigeon
          </Link>
        </h1>
        <ul className={HeaderStyles.navList}>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/about"
          >
            <li>About</li>
          </Link>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/blog"
          >
            <li>Blog</li>
          </Link>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/contact"
          >
            <li>Contact</li>
          </Link>
        </ul>
      </header>
    </>
  )
}

export default Header
