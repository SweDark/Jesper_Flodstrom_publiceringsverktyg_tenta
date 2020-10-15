import React from "react"
import { TitleWrapper } from "../elements/TitleElements"
const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h2>{title || "default title"}</h2>
      <div></div>
    </TitleWrapper>
  )
}

export default Title
