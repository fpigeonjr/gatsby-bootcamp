import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Homepage = () => (
  <Layout>
    <h1>Hello. </h1>
    <h2>I am Frank, a frontend developer living in San Antonio.</h2>
    <p>
      Need a developer? <Link to="/contact">Contact Me</Link>
    </p>
  </Layout>
)

export default Homepage
