import React, { useEffect, useState } from "react"
import "./index.scss"
import ArticleReference from "../../components/article-reference/article-reference"
import { GithubApi } from "../../services/github-api"

function PortfolioPage() {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const articles = require("../../resources/articles.json")

  useEffect(() => {
    GithubApi.getRepos().subscribe(res => {
      setRepos(res)
      setIsLoading(false)
    })
  }, [])

  function formatDate(dateString) {
    let date = new Date(dateString)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    year = year.toString()
    if (month < 10) {
      month = `0${month}`
    }
    if (day < 10) {
      day = `0${day}`
    }

    return `${day}/${month}/${year.slice(2, 4)}`
  }

  return (
    <div className="page">
      <h1>Artículos</h1>
      <p>
        Startups, tecnología, herramientas, agile, métricas, negocio y otras
        reflexiones...
      </p>
      <div className="posts-container">
        {articles.map(article => {
          let i18nArticle = {}
          Object.keys(article).forEach(articleKey => {
            i18nArticle[articleKey] = article[articleKey]["es"]
          })

          return <ArticleReference articleData={i18nArticle}></ArticleReference>
        })}
      </div>
      <h1>Repositorios</h1>
      <p>
        Un workspace en el que ir iniciando proyectos, tests y otras cosas de
        laboratorio...
      </p>
      <div className="project-cards-container">
        {isLoading && (
          <div className="loader">
            <p>Cargando Repositorios</p>
            <div className="loader-positioning">
              <div className="lds-dual-ring"></div>
            </div>
          </div>
        )}
        {!isLoading &&
          repos.map((repository, index) => {
            return (
              <div className="project-card" key={index}>
                <span style={{ float: "right" }}>
                  Última actualización: {formatDate(repository.updated_at)}
                </span>
                <br></br>
                <h1>
                  <a
                    href={repository.repository_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {repository.project_name}
                  </a>
                </h1>
                <p>{repository.description}</p>
                {!!repository?.live_demo_url && (
                  <p>
                    <a
                      href={repository.live_demo_url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </p>
                )}
                <div className="tags-container">
                  {repository.tags.map((tag, tagIndex) => {
                    return <span key={tagIndex}>#{tag}</span>
                  })}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default PortfolioPage
