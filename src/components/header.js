// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ contactNumber }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      background: "#F7CA18",
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `auto`,
        maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: "auto", display: "flex", justifyContent: "space-between",  padding: "10px 0"}}>
        <a
          href={`tel:+${contactNumber}`}
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: "14px"
          }}
        >
          Call Us: +{contactNumber}
        </a>
        <p style={{fontSize: "14px", margin: 0}}>Social Media links placeholder</p>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  contactNumber: PropTypes.string,
}

Header.defaultProps = {
  contactNumber: ``,
}

export default Header
