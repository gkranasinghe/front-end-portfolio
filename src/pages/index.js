import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <center>
      <h1>FRONT-END WEB DEVELOPMENT BLOG</h1>
      <h2>JavaScript, React, GraphQL & Friends</h2>
    </center>
    <div className="bgPrimaryLight">This is a success message</div>
    <div className="bgSecondaryLight">This is a warning message</div>
  </Layout>
)

export default IndexPage
