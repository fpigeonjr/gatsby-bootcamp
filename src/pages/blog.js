import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import BlogStyles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const { allMarkdownRemark } = data // data.markdownRemark holds our post data
  return (
    <Layout>
      <h1>My Blog </h1>
      <ol className={BlogStyles.posts}>
        {allMarkdownRemark.edges.map(post => (
          <li key={post.node.frontmatter.title} className={BlogStyles.post}>
            <Link to={`/blog/${post.node.fields.slug}`}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
