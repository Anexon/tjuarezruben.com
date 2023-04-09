import * as React from "react"
import ContactButton from "../components/contact-button/contact-button"
import "./index.scss"
import SpecializationSection from "../components/specialized-section/specialization-section"
import LastWorksSection from "../components/last-works-section/last-works-section"

const IndexPage = () => (
  <>
    <section className="summary-section">
      <div className="image-container">
        <div className="summary-wrapper">
          <div className="header-background"></div>
          <div className="personal-summary">
            <small>Hola!</small>
            <h1>Soy Rubén Triviño Juárez</h1>
            <p>
              Un emprendedor en serie y un apasionado de proyectos de ámbito
              tecnológico. Me van los desafíos y solucionar problemas de forma
              creativa.
            </p>
            <ContactButton></ContactButton>
          </div>
        </div>
      </div>
    </section>
    <SpecializationSection></SpecializationSection>
    <LastWorksSection></LastWorksSection>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
