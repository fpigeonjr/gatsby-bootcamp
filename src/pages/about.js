import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I am a web developer living in San Antonio</p>
      <Link to="/contact">Want to work with me? Reach Out.</Link>
    </Layout>
  )
}

export default About
