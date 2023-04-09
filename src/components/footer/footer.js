import React from "react"
import "./footer.scss"

function Footer() {
  return (
    <footer className="footer-container">
      <span>Conectemos!</span>
      <div>
        <a href="https://github.com/Anexon" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://medium.com/@benru" target="_blank" rel="noreferrer">
          <i className="fab fa-medium"></i>
        </a>
        <a href="https://twitter.com/benRuTJ" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tjuarezruben/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
