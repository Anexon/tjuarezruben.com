import React from "react"
import "./specialization-card.scss"

function SpecializationCard(params) {
  return (
    <div
      className={`specialization-card-container show-on-scroll ${
        params.highlighted === "true" ? "highlighted" : ""
      }`}
    >
      <img
        src={`${params.imgUrl.split(".")[0]}${
          params.highlighted === "true" ? "_highlighted.svg" : ".svg"
        }`}
        alt="expertise icon"
      ></img>
      <h3>{params.title}</h3>
      <p>{params.description}</p>
    </div>
  )
}
export default SpecializationCard
