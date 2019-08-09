import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

function Contact() {
  return (
    <>
      <Header />
      <h1>Contact Me</h1>
      <p>
        email me at{" "}
        <a href="mailto:frank.pigeonjr@gmail.com">frank.pigeonjr@gmail.com</a>
      </p>
      <p>
        Visit me on Twitter.
        <a href="https://twitter.com/fpigeonjr">@fpigeonjr</a>
      </p>
      <Footer />
    </>
  )
}

export default Contact
