/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Image2 from "../components/image2"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          contactNumber
        }
      }
    }
  `)

  return (
    <>
      <Header contactNumber={data.site.siteMetadata?.contactNumber || `Cake`} title={data.site.siteMetadata?.title || `Tax Plus Group LLC`} />
      <div style={{ height: "375px", width: "100%", marginBottom: "1.45rem"}}>
        <Image2 />
      </div>
      <div
        style={{
          margin: `0 auto`,
          padding: `0 0 1.45rem`,
        }}
      >
        <main>{children}</main>
        <div style={{ height: "260px", backgroundColor: "pink"}}></div>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
