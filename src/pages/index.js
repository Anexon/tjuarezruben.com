import * as React from "react"

import Layout from "../components/layout"
import * as styles from "../components/index.module.scss"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>This site is under construction...</div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
