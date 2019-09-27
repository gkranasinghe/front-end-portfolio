import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 700,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
        id="Content"
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with love by Jordan Winslow
          <br />
          Powered by
          <a href="https://www.gatsbyjs.org">&nbsp;Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
