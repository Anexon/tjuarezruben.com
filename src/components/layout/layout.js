import React from "react"
import Footer from "../footer/footer"
import NavBar from "../nav-bar/nav-bar"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <div
        style={{
          margin: `0 auto`,
          marginTop: `var(--nav-bar-height)`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout
