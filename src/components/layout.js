import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
