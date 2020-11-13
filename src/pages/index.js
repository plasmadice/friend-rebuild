import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Image2 from "../components/image2"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Tax Plus Group" />
    <h1>TAX SPECIALISTS</h1>
    <div style={{ height: "375px", backgroundColor: "green", margin: 0}}></div>
    <p>You're cute as hell.</p>
    <p>Check out how easy it is to make sites.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
