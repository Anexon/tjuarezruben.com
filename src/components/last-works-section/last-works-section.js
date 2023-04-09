import React, { useEffect } from "react"
import "./last-works-section.scss"
import { showOnScroll } from "../../services/show-on-scroll.js"
function LastWorksSection() {
  useEffect(() => {
    showOnScroll.checkShowOnScrollItems(".last-works-container")
  }, [])
  return (
    <section className="last-works-section">
      <div className="last-works-title">
        <h2>Últimos trabajos</h2>
        <p>
          Me gusta mantenerme activo y reciclando habilidades en múltitud de
          proyectos, estos son algunos de los más recientes...
        </p>
      </div>
      <div className="last-works-container">
        <div className="column">
          <div
            className="cell"
            style={{
              backgroundImage:
                'url("/images/last-works/trampoline_background.svg"',
            }}
          >
            <div className="inner-content">
              <div>
                <h3>Trampoline</h3>
                <small>Estudio de Productos Digitales</small>
                <p>
                  Cofundador, Project Manager y técnico en áreas de inteligencia
                  de negocio, analítica, software y ventas.
                </p>
                <p>
                  Un proyecto divertidisimo definiendo con startups estrategias
                  de Go-To-Market efectivas y aplicables.
                </p>
              </div>
            </div>
          </div>
          <div
            className="cell"
            style={{
              backgroundImage:
                'url("/images/last-works/buscoextra_background.jpg")',
            }}
          >
            <div className="inner-content">
              <div>
                <h3>BuscoExtra</h3>
                <small>ETT Digital Especializada en Hostelería</small>
                <p>
                  Director de operaciones, coordinador entre departamentos,
                  desarrollo de software, negocio, analítica y ventas.
                </p>
                <p>
                  Esta fue mi escuela, primer gran proyecto con operaciones a
                  nivel nacional y un equipo de más 25 personas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div
            className="cell"
            style={{
              backgroundImage:
                'url("/images/last-works/willimbu_background.jpg")',
            }}
          >
            <div className="inner-content">
              <div>
                <h3>Willimbu</h3>
                <small>Estudio de Software</small>
                <p>
                  CEO y desarrollador fullstack; desarrollo de apliciones
                  nativas, web, infraestructura, APIs, aplicando metodologías
                  Agile.
                </p>
                <p>
                  Mi primera experiancia gestionando una empresa y tratando con
                  clientes en una empresa de desarrollo de software.
                </p>
              </div>
            </div>
          </div>
          <div
            className="cell"
            style={{
              backgroundImage:
                'url("/images/last-works/medium_background.png")',
            }}
          >
            <div className="inner-content">
              <div>
                <h3>Startups y Tecnología</h3>
                <small>
                  Artículos en Medium sobre experiencias profesionales
                </small>
                <p>
                  Redacción sobre tecnología, herramientas y startups, mecánicas
                  de trabajo y todo sobre experiencias profesionales como
                  emprendedor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div
            className="cell"
            style={{
              backgroundImage: 'url("/images/last-works/tomarani.png")',
            }}
          >
            <div className="inner-content">
              <div>
                <h3>Tomarani's Studio</h3>
                <small>Equipo de Desarrollo de Videojuegos</small>
                <p>
                  Desarrollador Fullstack, herramientas para maquetación de
                  niveles, animación, lógica de juego y controles de jugador.
                </p>
              </div>
            </div>
          </div>
          <div
            className="cell"
            style={{
              backgroundImage: 'url("/images/last-works/qbbo_background.png")',
            }}
          >
            <div className="inner-content">
              <div>
                <h3>QBBO</h3>
                <small>Plataforma de ofertas en ocio nocturno</small>
                <p>
                  Desarrollo y comercialización plataforma web (Angular) y
                  aplicación nativa (Android e Ionic).
                </p>
              </div>
            </div>
          </div>
          <div
            className="cell"
            style={{
              backgroundImage:
                'url("/images/last-works/angular_malaga_background.jpg")',
            }}
          >
            <div className="inner-content">
              <div>
                <h3>Angular Málaga</h3>
                <small>Coordinador y ponente</small>
                <p>
                  Colaboración en la organización de múltiples meetups y
                  ponente. Contribuidor en el repositorio de Angular
                  Communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LastWorksSection
