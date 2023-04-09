import React from "react"
import "./article-reference.scss"

function ArticleReference({ articleData }) {
  return (
    <div
      className="post-card"
      onClick={() => {
        window.open(articleData.articleUrl, "_blank")
      }}
    >
      <div
        className="post-photo"
        style={{
          backgroundImage: `url('${articleData.backgroundImage}')`,
        }}
      ></div>
      <div className="post-body">
        <h1>{articleData.title}</h1>
        <p>{articleData.description}</p>
        <small>
          <a href={articleData.profileUrl}>{articleData.profileName}</a> En{" "}
          <a href={articleData.communityUrl}>{articleData.communityName}</a>
        </small>
        <small>{articleData.articleReadTimeText}</small>
      </div>
    </div>
  )
}

export default ArticleReference
