import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const Homepage = () => (
  <>
    <Header />
    <h1>Hello. </h1>
    <h2>I am Frank, a frontend developer living in San Antonio.</h2>
    <p>
      Need a developer? <Link to="/contact">Contact Me</Link>
    </p>
    <Footer />
  </>
)

export default Homepage
