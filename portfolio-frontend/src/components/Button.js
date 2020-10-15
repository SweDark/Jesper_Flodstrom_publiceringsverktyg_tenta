import React from "react"
import { ButtonWrapper, CentralButton } from "../elements/ButtonElements"

export const Button = ({ children, href }) => {
  // Note the link, dont forget to add "/" + before href in the ButtonWrapper
  return <ButtonWrapper to={"/" + href}>{children}</ButtonWrapper>
}

export const ButtonCenter = ({ children, href }) => {
    // Note the link, dont forget to add "/" + before href in the ButtonWrapper
    return <CentralButton to={"/" + href}>{children}</CentralButton>
  }