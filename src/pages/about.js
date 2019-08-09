import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const About = () => {
  return (
    <>
      <Header />
      <h1>About Me</h1>
      <p>I am a web developer living in San Antonio</p>
      <Link to="/contact">Want to work with me? Reach Out.</Link>
      <Footer />
    </>
  )
}

export default About
