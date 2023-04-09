import React, { useEffect } from "react"
import "./specialization-section.scss"
import SpecializationCard from "./specialization-card/specialization-card"
import { showOnScroll } from "../../services/show-on-scroll.js"

function SpecializationSection() {
  useEffect(() => {
    showOnScroll.checkShowOnScrollItems(".knowledge-areas")
  }, [])

  return (
    <section className="knowledge-areas">
      <div className="title">
        <h2>Áreas de trabajo</h2>
        <p>
          Como manager de operaciones me encanta estar en todo, pero hay algunas
          áreas que me apasionan...
        </p>
      </div>
      <div className="specialization-carrousel">
        <SpecializationCard
          title="Software Engineer"
          description={
            <>
              <span>
                Integración de herramientas, desarrollo de servicios
                distribuidos y definición de architecturas escalables.
              </span>
            </>
          }
          imgUrl="/images/software_engineer.svg"
        ></SpecializationCard>
        <SpecializationCard
          title="Manager de Operaciones"
          description={
            <>
              <span>
                Como fundador de varias startups he sido responsable de la
                administración y coordinación entre departamentos para la
                consecución de objetivos.
              </span>
              <br></br>
              <br></br>
              <span>Tecnología, Ventas, Finanzas, MKT, Growth, RRHH</span>
            </>
          }
          imgUrl="/images/business_administration.svg"
          highlighted="true"
        ></SpecializationCard>
        <SpecializationCard
          title="Analista de Datos"
          description={
            <>
              <span>
                Obsesionado de la mentalidad data-driven, la visualización de la
                información como herramienta de comunicación; métricas, funnels,
                eventos, tests A\B, ML...
              </span>
            </>
          }
          imgUrl="/images/data_analytics.svg"
        ></SpecializationCard>
      </div>
    </section>
  )
}

export default SpecializationSection
