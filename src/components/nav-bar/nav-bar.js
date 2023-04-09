import * as React from "react"
import { Link } from "gatsby"
import "./nav-bar.scss"

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="container">
        <Link to="/">Rubén Triviño Juárez</Link>

        <div className="sections">
          <Link to="/portfolio">Portfolio</Link>
          <span>
            <a
              href="https://www.linkedin.com/in/tjuarezruben/"
              target="_blank"
              rel="noreferrer"
            >
              Contactar
            </a>
          </span>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
