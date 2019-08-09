import React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <>
      <h1>About Me</h1>
      <p>I am a web developer living in San Antonio</p>
      <Link to="/contact">Want to work with me? Reach Out.</Link>
    </>
  )
}

export default About
